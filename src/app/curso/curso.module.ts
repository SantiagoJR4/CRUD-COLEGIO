import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PensumComponent } from './pages/pensum/pensum.component';



@NgModule({
  declarations: [
    PensumComponent
  ],
  exports:[
    PensumComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CursoModule { }
