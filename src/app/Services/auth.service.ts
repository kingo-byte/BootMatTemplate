import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../Environments/environment.dev';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSignal = signal<boolean>(this.isLoggedIn());
  decodedToken = signal<{ [key: string]: string } | null>(this.initializeDecodedToken());

  constructor(private http: HttpClient) {}

  authenticate(ticket: string): Observable<any> {
    return this.http.post<Observable<any>>(`${environment.api}/auth/authenticate`, { ticket });
  }

  isLoggedIn(): boolean {
    const token = sessionStorage.getItem('access-token');
    return !!token;
  }

  //#region token, ticket setters getters
  setToken(token: string): void {
    sessionStorage.setItem('access-token', token);
    this.decodedToken.set(this.getClaims(token));
    this.isLoggedInSignal.set(true);
  }

  setTicket(ticket: string): void {
    sessionStorage.setItem('ticket', ticket);
  }

  getToken(): string | null {
    return sessionStorage.getItem('access-token');
  }

  getTicket(): string | null {
    return sessionStorage.getItem('ticket');
  }
  //#endregion

  getClaims(token: string): any {
    return token ? jwt_decode.jwtDecode(token): null; 
  }

  logout(): void {
    sessionStorage.removeItem('access-token');
    sessionStorage.removeItem('ticket');
    this.isLoggedInSignal.set(false);
    this.decodedToken.set(null);
  }

  private initializeDecodedToken(): { [key: string]: string } | null {
    const token = this.getToken();
    if (!token) {
      console.log('No token found during AuthService initialization.');
      return null;
    }
    return this.getClaims(token);
  }
}
