import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://m1p10mean-fabruce-finaritra.onrender.com/api/";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<any>{
    return this.http.get(`${baseUrl}employee/findAll`)
  }
  
}
