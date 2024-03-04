import { Component } from '@angular/core';
import { Employee } from '../lib/employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees: Employee[] = [];

  getEmployees(): void {

    this.employeeService
      .getEmployees()
      .subscribe(employees => this.employees = employees);

  }

  ngOnInit(): void {

    this.getEmployees();

  }

  constructor(private employeeService: EmployeeService) { }

}
