import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}
  
  signIn(username: string, password: string): Observable<any> {
    const data: any =  {
        username, password
    }
    return this.http.post(baseUrl+"client/signin", data);
  }
}
