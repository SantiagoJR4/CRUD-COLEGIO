import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './curso/pages/usuarios/usuarios.component';
import { PensumComponent } from './curso/pages/pensum/pensum.component';
import { MateriasComponent } from './curso/pages/materias/materias.component';

const routes: Routes = [
  { path: '', redirectTo: '/pensum', pathMatch: 'full' },
  {path:'pensum',component:PensumComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'materias',component:MateriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
