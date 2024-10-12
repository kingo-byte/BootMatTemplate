import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../Environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  constructor(private http: HttpClient) { }

  authenticate(): Observable<any> {
    console.log('called auth service');

    return this.http.post<Observable<any>>(`${environment.api}/auth/authenticate`,{});
  }

  getToken(): string | null {
    if (!this.tokenSubject.value) {
      this.tokenSubject.next(sessionStorage.getItem('token'));
    }

    return this.tokenSubject.value;
  }
}
