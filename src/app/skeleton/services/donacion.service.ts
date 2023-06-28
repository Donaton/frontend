import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import { Donacion } from '../Interfaces/donacion.interface';
import { Donante } from '../Interfaces/donante.interface';
import { Caso } from '../Interfaces/caso.interface';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addDonacion(donacion: Donacion, donante: Donante): Observable<any> {
    const guardarDonante$ = this.http.post(`${this.apiUrl}/donante`, donante);
    const guardarDonacion$ = this.http.post(`${this.apiUrl}/donacion`, donacion);

    return forkJoin([guardarDonante$, guardarDonacion$]);
  }

  listarCasos(): Observable<Caso[]> {
    return this.http.get<Caso[]>(`${this.apiUrl}/casos`);
  }
}



