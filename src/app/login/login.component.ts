import { Component } from '@angular/core';
import Swal from 'sweetalert2'
import { AdminApiService } from '../services/admin-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  empEmail: string = '';
  empPassword: string = '';
  constructor(private adminService: AdminApiService, 
    private router: Router)  { }
  login() {
    if (!this.empEmail || !this.empPassword) {
      Swal.fire({
        title: "Ooops",
        text: "Please fill the form completely!",
        icon: "info"
      });
    }
    else {
      this.adminService.adminAuthorization().subscribe({
        next: (res: any) => {
          const { email, password } = res;
          if (email === this.empEmail && password === this.empPassword) {
            console.log("Admin login success");
            console.log(res);
            this.adminService.updateSharedData(true)
            sessionStorage.setItem("username",res.username);
            sessionStorage.setItem("pwd",res.password)
            Swal.fire({
              title: "Wow!",
              text: "Login Successfull!",
              icon: "success"
            });
            this.router.navigateByUrl('dashboard')
          }
          else{
            Swal.fire({
              title: "Error!",
              text: "Invalid email or password",
              icon: "error"
            });
          }

        },
        error: (res: any) => {
          console.log(res)
        }
      })

    }
  }
}
