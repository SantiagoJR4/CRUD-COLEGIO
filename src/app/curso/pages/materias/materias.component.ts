import { Component, OnInit } from '@angular/core';
import { Materia } from '../../interfaces/datos.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  datosMateria:Materia[]=[];

  constructor(private datosService:DatosService) { }

  ngOnInit(): void {
    this.datosService.obtenerMaterias().subscribe(res=>this.datosMateria=res);
  }

}
