import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../Environments/environment.dev';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSignal = signal<boolean>(this.isLoggedIn());

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  authenticate(ticket: string): Observable<any> {
    return this.http.post<Observable<any>>(`${environment.api}/auth/authenticate`, {ticket: ticket});
  }

  isLoggedIn(): boolean {
    let token = sessionStorage.getItem('access-token');
    return token ? true : false;
  }

  setToken(token: string):void{
    sessionStorage.setItem('access-token', token!)
  }

  setTicket(ticket: string):void{
    sessionStorage.setItem('ticket', ticket!)
  }

  getToken(): string | null {
      return sessionStorage.getItem('access-token');
  }
  
  getTicket():string | null{
    return sessionStorage.getItem('ticket');
  }

  getClaims(): any{
     return this.isLoggedInSignal() ? this.jwtHelper.decodeToken(this.getToken()!) : null;
  }

  logout(): void {  
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('ticket');
  }
}
