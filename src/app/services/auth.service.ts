import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Cambia esto a tu URL de producción

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError('Ocurrió un error; por favor intente de nuevo más tarde.');
  }

  register(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios`, usuario).pipe(
      catchError(this.handleError)
    );
  }

  login(correo: string, clave: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { correo, clave }).pipe(
      catchError(this.handleError)
    );
  }
}

