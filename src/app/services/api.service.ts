import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

   addCaso(nuevoCaso: any): Observable<any> {
    const url = `${this.apiUrl}/casos`;
    return this.http.post(url, nuevoCaso);
  }
}
