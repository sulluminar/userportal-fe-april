import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor( private httpclient:HttpClient) { }
  server_url = "http://localhost:4000";

  // login admin
  adminAuthorization(){
      return this.httpclient.get(`${this.server_url}/employee/1`)
  }

  updateAdmin(admin:any){
    return this.httpclient.put(`${this.server_url}/employee/1`,admin)
  }
}
