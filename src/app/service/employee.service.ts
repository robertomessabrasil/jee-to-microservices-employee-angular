import { Injectable } from '@angular/core';
import { Employee } from '../lib/employee';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeesUrl: string = 'http://localhost:8081/employee/v1/employees';

  getEmployees(): Observable<Employee[]> {

    return this.http
      .get<Employee[]>(this.employeesUrl)
      .pipe(catchError(this.handleError<Employee[]>()));

  }

  handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };

  }

  constructor(private http: HttpClient) { }

}
