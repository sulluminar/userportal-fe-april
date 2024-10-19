import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  allEmployeesList: any = [];
  amount = 50;
  searchKey = '';
  p: number = 1;
  constructor(private empService: EmployeeService) { }
  ngOnInit() {
    console.log("Inside ngonInit");
    this.getAllEmployees()
  }
  getAllEmployees() {
    this.empService.getAllEmployeesApi().subscribe({
      next: (res) => {
        console.log("all employess");
        console.log(res);
        this.allEmployeesList = res;
      },
      error: (res) => {
        console.log(res)
      }
    })
  }
  deleteEmployee(id: any) {
    this.empService.deleteEmployeeApi(id).subscribe({
      next:(res)=>{
        console.log(res);
        Swal.fire({
          title: "Wow!",
          text: "Deleted successfully",
          icon: "success"
        });
        this.getAllEmployees();
      },
      error:(res)=>{
        console.log(res)
      }
    })
  }
  sortById(){
    this.allEmployeesList.sort((a:any,b:any)=>a.id-b.id)
  }
  sortByName(){
    this.allEmployeesList.sort((a:any,b:any)=>a.username.localeCompare(b.username))
  }
  generatePDF(){
    const pdf= new jsPDF();
    let head = [['ID', 'Employee Name', 'Email','Status']];
    let body:any = [];
    this.allEmployeesList.forEach((item:any)=>{
      body.push([item.id, item.username, item.email, item.status])
    })
    pdf.setFontSize(16);
    pdf.text("Employee details",10,10);
    autoTable(pdf,{head:head, body:body});
    pdf.save('emaployee_list.pdf');
    pdf.output('dataurlnewwindow')
  }

}
