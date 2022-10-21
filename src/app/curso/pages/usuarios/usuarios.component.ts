import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/datos.interface';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  datosUsuario:Usuario[]=[];


  constructor(private datosService:DatosService) { }

  ngOnInit(): void {
    this.datosService.obtenerUsuarios().subscribe(res=>this.datosUsuario=res);
  }

}
