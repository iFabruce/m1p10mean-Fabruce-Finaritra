import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://m1p10mean-fabruce-finaritra.onrender.com/api/appointment/";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }
  
  employeeAppointment(employeeId: any, date: any): Observable<any>{
    return this.http.get(`${baseUrl}employeeAppointment/${employeeId}/${date}`)
  }
  getClientAppointment(clientId: any): Observable<any>{
    return this.http.get(`${baseUrl}calendar/${clientId}`)
  }
  getEmployeeAppointment(employeeId: any): Observable<any>{
    return this.http.get(`${baseUrl}calendarEmployee/${employeeId}`)
  }
  addAppointment(date: any, hour: any, clientId: any, serviceId: any,employeeId: any, email: any){
    return this.http.post(`${baseUrl}create`, {date, hour, employeeId, clientId, serviceId, email})
  }
  sendEmail(email: any, subject: any,  date: any, heure: any, duration: any, service: any,employee: any){
    return this.http.post('https://m1p10mean-fabruce-finaritra.onrender.com/api/email/reservation', {email, subject, date, heure, duration, service, employee})
  }
}
