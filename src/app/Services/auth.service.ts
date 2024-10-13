import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../Environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isRefreshingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isRefreshing = false; 

  constructor(private http: HttpClient) { }

  authenticate(ticket: string): Observable<any> {
    console.log('called auth service');

    return this.http.post<Observable<any>>(`${environment.api}/auth/authenticate`,{ticket: ticket});
  }

  getToken(): string | null {
      return sessionStorage.getItem('token');
  }

  setToken(token: string):void{
    sessionStorage.setItem('token', token!)
  }

  getTicket():string | null{
    return sessionStorage.getItem('ticket');
  }

  logout(): void {  
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('ticket');
  }
}
