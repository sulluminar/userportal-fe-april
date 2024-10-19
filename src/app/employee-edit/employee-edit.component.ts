import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeDetailsById: any = {};
  // ActivatedRoute class is used to extract paramm from url path
  constructor(private route: ActivatedRoute, private empService: EmployeeService,
    private router: Router
  ) {
  }
  ngOnInit(): void {
    // for getting value from path url
    this.route.params.subscribe((res: any) => {
      console.log(res)
      const { id } = res;
      this.getEmployeeDetailsById(id)
    })
  }

  getEmployeeDetailsById(empid: any) {
    this.empService.getEmployeeByIdApi(empid).subscribe({
      next: (res) => {
        console.log("Get employee by id details");
        console.log(res);
        this.employeeDetailsById = res;
      },
      error: (res) => {
        console.log(res)
      }
    })
  }
  updateEmployee() {
    console.log("Update values");
    console.log(this.employeeDetailsById);
    this.employeeDetailsById.id = Number(this.employeeDetailsById.id);
    this.employeeDetailsById.status = Number(this.employeeDetailsById.status)
    this.empService.updateEmployee(this.employeeDetailsById.id, this.employeeDetailsById).subscribe({
      next: (res) => {
        console.log("Update response");
        console.log(res);
        Swal.fire({
          title: "Great",
          text: `${this.employeeDetailsById.username} successfully added`,
          icon: "success"
        });
        this.router.navigateByUrl('employees')
      },
      error: (res) => {
        console.log(res);
        Swal.fire({
          title: "Error",
          text: `Something went wrong`,
          icon: "error"
        });
      }
    })
  }
  cancel() {
    this.router.navigateByUrl('employees')
  }
}
