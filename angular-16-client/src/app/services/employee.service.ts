import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get(`${baseUrl}employee/findAll`)
  }
}
