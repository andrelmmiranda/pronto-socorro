import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Register } from './register.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  url = 'http://localhost:3001/cadastro';

  constructor(private snackBar: MatSnackBar, private http: HttpClient){}


  showMessage(message: string): void{
    this.snackBar.open(message, 'fechar', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  errorHandler(error: any): Observable<any>{
    this.showMessage('Ocorreu um erro!');
    return EMPTY;
  }

  createRegister(register: Register): Observable<Register>{
    return this.http.post<Register>(this.url, register)
  }

  readRegister(): Observable<Register[]>{
    return this.http.get<Register[]>(this.url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  readById(id: string): Observable<Register>{
    const url = `${this.url}/${id}`
    return this.http.get<Register>(url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  updateRegister(register: Register): Observable<Register>{
    const url = `${this.url}/${register.id}`
    return this.http.put<Register>(url, register).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }

  deleteRegister(id: string): Observable<Register>{
    const url = `${this.url}/${id}`
    return this.http.delete<Register>(url).pipe(
      map(object => object), catchError(error => this.errorHandler(error))
    );
  }
}