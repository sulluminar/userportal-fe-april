import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employee: any = {
    id: '',
    username: '',
    email: '',
    status: 1
  }
  constructor(private empService: EmployeeService, private router:Router) { }
  clearFields() {
    this.employee = {
      status: 1
    }
  }
  addEmployee() {
    if (!this.employee.id || !this.employee.username || !this.employee.email || !this.employee.status) {
      Swal.fire({
        title: "Ooops",
        text: "Please fill the form completely!",
        icon: "info"
      });

    }
    else {
      // Number() and parseInt() can be used to convert string to integer 
      this.employee.id = Number(this.employee.id);
      this.employee.status = parseInt(this.employee.status)
      this.empService.addEmployeeApi(this.employee).subscribe({
        next: (res) => {
          Swal.fire({
            title: "Great",
            text: `${this.employee.username} successfully added`,
            icon: "success"
          });
          this.clearFields();
          this.router.navigateByUrl('employees')
        },
        error: (res) => {
          console.log(res);
          Swal.fire({
            title: "Ooops",
            text: "Something went wrong!",
            icon: "error"
          });
        }

      })
    }
  }
}
