import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  constructor(private httpclient: HttpClient) { }
  server_url = "http://localhost:4000";

  // login admin
  adminAuthorization() {
    return this.httpclient.get(`${this.server_url}/employee/1`)
  }

  updateAdmin(admin: any) {
    return this.httpclient.put(`${this.server_url}/employee/1`, admin)
  }

   // 1)  create an object of Behaviour subject
  public sharedData = new BehaviorSubject(false);

  //2) create a method to update the vakue of behaviour subject
  updateSharedData(data: any) {
    this.sharedData.next(data)
  }
  
}
