import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { ContinenteComponent } from './continente.component';

// Routing
import { ContinenteRoutingModule } from './continente.routing'; 

@NgModule({
  declarations: [
    ContinenteComponent
  ],
  imports: [
    CommonModule,
    ContinenteRoutingModule
  ]
})
export class ContinenteModule { }
