import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { PaisComponent } from './pais.component';

// Routing
import { PaisRoutingModule } from './pais.routing'; 

@NgModule({
  declarations: [
    PaisComponent
  ],
  imports: [
    CommonModule,
    PaisRoutingModule
  ]
})
export class PaisModule { }
