import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/manager";

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private http: HttpClient) { }
  
  getWorkingTime(): Observable<any>{
    return this.http.get(`${baseUrl}/workingTime`)
  }
  getDailyAppointmentNumber(): Observable<any>{
    return this.http.get(`${baseUrl}/getDailyAppointmentNumber`)
  }
  getMonthlyAppointmentNumber(): Observable<any>{
    return this.http.get(`${baseUrl}/getMonthlyAppointmentNumber`)
  }
  getDailyCa(): Observable<any>{
    return this.http.get(`${baseUrl}/getDailyCa`)
  }
  getMonthlyCa(): Observable<any>{
    return this.http.get(`${baseUrl}/getMonthlyCa`)
  }

}
