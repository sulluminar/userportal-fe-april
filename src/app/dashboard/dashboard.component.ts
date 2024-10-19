import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { AdminApiService } from '../services/admin-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  profileImage = './assets/images/userprofile-pic.jpg';
  editAdminStatus = false;
  employeeCount = 0;
  adminName: any = '';
  adminPwd: any = '';
  adminDetails: any = {};
  selected: Date | null = new Date();
  constructor(private empService: EmployeeService, private adminSer: AdminApiService) { }
  ngOnInit(): void {
    this.getAdminDetails();
    if (sessionStorage.getItem("username")) {
      this.adminName = sessionStorage.getItem("username")
    }
    if (sessionStorage.getItem('pwd')) {
      this.adminPwd = sessionStorage.getItem('pwd')
    }
    this.getAllEmployess()
  }
  getAllEmployess() {
    this.empService.getAllEmployeesApi().subscribe({
      next: (res: any) => {
        console.log("all eployees in dashboard");
        this.employeeCount = res.length - 1
        console.log(res)
      },
      error: (res) => {
        console.log(res)
      }
    })
  }
  editAdmin() {
    this.editAdminStatus = !this.editAdminStatus;
    this.adminName = sessionStorage.getItem('username');
    this.adminPwd = sessionStorage.getItem('pwd')
  }
  getFile(data: any) {
    let fileDetails = data.target.files[0];
    // next wee need to convert this input to a URL
    // fileReader is used for that
    let fr = new FileReader();
    fr.readAsDataURL(fileDetails);
    fr.onload = (event: any) => {
      this.profileImage = event.target.result
    }
  }
  getAdminDetails() {
    this.adminSer.adminAuthorization().subscribe({
      next: (res: any) => {
        this.adminDetails = res;
        if (res.profilePic) {
          this.profileImage = res.profilePic
        }
      },
      error: (res) => {
        console.log(res)
      }
    })
  }
  updateAdmin() {
    this.adminDetails.username = this.adminName;
    this.adminDetails.password = this.adminPwd;
    this.adminDetails.profilePic = this.profileImage;
    this.adminSer.updateAdmin(this.adminDetails).subscribe({
      next: (res: any) => {
        alert("Updated successfully");
        this.editAdminStatus = false;
        sessionStorage.setItem("username", res.username);
        sessionStorage.setItem("pwd", res.password);
        this.adminName = res.username;
        this.adminPwd = ''
      },
      error: (res) => {
        alert("Something went wrong")
      }
    })
  }
  cancelUpdate(){
    this.adminName = sessionStorage.getItem('username');
    this.adminPwd = sessionStorage.getItem('pwd');
    this.profileImage = this.adminDetails.profilePic
  }
}
