import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetObjectService {
  constructor(private http: HttpClient) {}

  create(nameObject: String, apiname: String, data: any): Observable<any> {
    console.log("url",data)
    const url = `http://localhost:8080/api/${nameObject}/${apiname}`;
    return this.http.post(url, data);
  }

  fetchData(nameObject: string, apiname: string): Observable<any> {
    const apiUrl = `http://localhost:8080/api/${nameObject}/${apiname}`;
    return this.http.get(apiUrl);
  }

  findOne(nameObject: string, apiname: string, id: string): Observable<any> {
    const apiUrl = `http://localhost:8080/api/${nameObject}/${id}/${apiname}`;
    return this.http.get(apiUrl);
  }

  updateData(nameObject: String, apiname: String, id: string, data: any): Observable<any> {
    const url = `http://localhost:8080/api/${nameObject}/${id}/${apiname}`;
    return this.http.put(url, data);
  }

  updateDataObject(nameObject: String, apiname: String, data: any): Observable<any> {
    console.log("url",data)
    const url = `http://localhost:8080/api/${nameObject}/${apiname}`;
    return this.http.put(url, data);
  }

  findByDataBody(nameObject: String, apiname: String, data: any): Observable<any> {
    const url = `http://localhost:8080/api/${nameObject}/${apiname}`;
    return this.http.post(url, data);
  }
}
