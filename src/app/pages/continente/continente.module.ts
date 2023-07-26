import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { ComponentsModule } from 'src/app/components/components.module';

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
    ContinenteRoutingModule,
    ComponentsModule
  ]
})
export class ContinenteModule { }
