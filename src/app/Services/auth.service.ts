import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoggedInUser } from './Models/customModels';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    return this.http.post<any>('https://localhost:7056/auth/authenticate', {});
  }

  getLoggedInUser(): LoggedInUser {
    const storedToken = sessionStorage.getItem('token');  
    const user = jwtDecode(storedToken!) as any;
    
    return {
      userId: user.userId,
      userName: user.userName,
      role: user.role
    };
  }
}

