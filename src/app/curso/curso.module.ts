import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensumComponent } from './pages/pensum/pensum.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MateriasComponent } from './pages/materias/materias.component';



@NgModule({
  declarations: [
    PensumComponent,
    UsuariosComponent,
    MateriasComponent
  ],
  exports:[
    PensumComponent,
    UsuariosComponent,
    MateriasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
