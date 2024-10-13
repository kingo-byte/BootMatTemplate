  import { HttpClient } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { BehaviorSubject, Observable, tap } from 'rxjs';
  import { LoggedInUser } from './Models/customModels';
  import { jwtDecode } from 'jwt-decode';

  @Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private loggedInUserSubject: BehaviorSubject<LoggedInUser | null> = new BehaviorSubject<LoggedInUser | null>(null);
    public loggedInUser$: Observable<LoggedInUser | null> = this.loggedInUserSubject.asObservable();

    constructor(private http: HttpClient) { }

    authenticate(userId: string): Observable<any> {
      return this.http.post<any>(`https://localhost:7056/auth/authenticate`, {userId: userId});
    }

    // getLoggedInUser(): LoggedInUser {
    //   const storedToken = sessionStorage.getItem('token');  
    //   const user = jwtDecode(storedToken!) as any;
      
    //   return {
    //     userId: user.userId,
    //     userName: user.userName,
    //     role: user.role
    //   };
    // }

    populateloggedInUser(token: string){
        const user = jwtDecode(token!) as any;
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        this.loggedInUserSubject.next(user);
    }
  }

