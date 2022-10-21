import { Component, OnInit } from '@angular/core';
import { Pensum } from '../../interfaces/datos.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-pensum',
  templateUrl: './pensum.component.html',
  styleUrls: ['./pensum.component.css']
})
export class PensumComponent implements OnInit {

  datos:Pensum[]=[];

  constructor(private datosService:DatosService) { }

  ngOnInit(): void {
    this.datosService.obtenerPensum().subscribe(res=>this.datos=res);
  }

}
