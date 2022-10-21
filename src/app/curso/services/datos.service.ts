import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia, Pensum, Usuario } from '../interfaces/datos.interface';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  url:string="http://127.0.0.1:8000/";

  constructor(private http:HttpClient) { }

  obtenerPensum():Observable<Pensum[]>{
    return this.http.get<Pensum[]>(`${this.url}pensum`);
  }
  obtenerUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}usuarios`);
  }
  obtenerMaterias():Observable<Materia[]>{
    return this.http.get<Materia[]>(`${this.url}materias`)
  }
}
