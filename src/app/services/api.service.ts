import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError('Ocurrió un error; por favor intente de nuevo más tarde.');
  }


  //MÉTODOS DE INSERCIÓN

  addUsuario(usuario: any): Observable<any> {
    const url = `${this.baseUrl}/usuarios`;
    return this.http.post(url, usuario).pipe(
      catchError(this.handleError)
    );
  }

   //Inicio de sesión
   loginUsuario(correo: string, clave: string): Observable<any> {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, { correo, clave }).pipe(
      catchError(this.handleError)
     );
  }  

    //Cierre de sesión
    logout(): Observable<any> {
      const url = `${this.baseUrl}/logout`;
      const token = localStorage.getItem('token'); // O sessionStorage.getItem('token')

      const headers = {
              'Authorization': `Bearer ${token}`
      };

      return this.http.post(url, {}, { headers }).pipe(  
      catchError(this.handleError)
      );
   }

    
  addMedicamento(medicamento: any): Observable<any> {
    const url = `${this.baseUrl}/medicamentos`;
    return this.http.post(url, medicamento).pipe(
      catchError(this.handleError)
    );
  }

  addAlimento(alimento: any): Observable<any> {
    const url = `${this.baseUrl}/alimentos`;
    return this.http.post(url, alimento).pipe(
      catchError(this.handleError)
    );
  }

  addCitas(cita: any): Observable<any> {
    const url = `${this.baseUrl}/citas`;
    return this.http.post(url, cita).pipe(
      catchError(this.handleError)
    );
  }

  addNovedades(novedad: any): Observable<any> {
    const url = `${this.baseUrl}/novedades`;
    return this.http.post(url, novedad).pipe(
      catchError(this.handleError)
    );
  }

  //METODOS DE CONSULTA

  getUserInfo(userId: string): Observable<any> {
    const url = `${this.baseUrl}/usuarios/${userId}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  
  //MÉTODOS DE ACTUALIZACIÓN

  //MÉTODOS DE ELIMINACIÓN

  
}


