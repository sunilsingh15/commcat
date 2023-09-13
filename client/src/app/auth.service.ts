import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post('/api/auth/register', registerRequest);
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post('/api/auth/login', loginRequest);
  }

}
