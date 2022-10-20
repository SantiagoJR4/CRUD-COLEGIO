import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pensum } from '../interfaces/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url:string="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  obtener():Observable<Pensum[]>{
    return this.http.get<Pensum[]>(`${this.url}pensum`);
  }
}
