import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { ComponentsModule } from 'src/app/components/components.module';

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
    PaisRoutingModule,
    ComponentsModule
  ]
})
export class PaisModule { }
