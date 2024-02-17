import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetObjectService {
  constructor(private http: HttpClient) {}

  fetchData(nameObject: string, apiname: string): Observable<any> {
    const apiUrl = `http://localhost:8080/api/${nameObject}/${apiname}`; // Assurez-vous de mettre le bon domaine ici
    return this.http.get(apiUrl);
  }

  updateData(nameObject: String, apiname: String, id: string, data: any): Observable<any> {
    const url = `http://localhost:8080/api/${nameObject}/${id}/${apiname}`;
    return this.http.put(url, data);
  }
}
