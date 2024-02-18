import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  
  employeeAppointment(employeeId: any, date: any): Observable<any>{
    return this.http.get(`${baseUrl}appointment/employeeAppointment/${employeeId}/${date}`)
  }
  addAppointment(date: any, hour: any, clientId: any, serviceId: any,employeeId: any){
    return this.http.post(`${baseUrl}appointment/create`, {date, hour, employeeId, clientId, serviceId})
  }
}
