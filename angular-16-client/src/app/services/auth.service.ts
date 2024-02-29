import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "https://m1p10mean-fabruce-finaritra.onrender.com/api/";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) {}
  
  signIn(username: string, password: string, profil: string): Observable<any> {
    const data: any =  {
        username, password, profil
    }
    console.log(data)
    const url = baseUrl+"auth/signin"
    console.log(url)
    return this.http.post(url,data);
  }

  //AUTHORIZATION
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
