import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { CapitalComponent } from './capital.component';

// Routing
import { CapitalRoutingModule } from './capital.routing';

@NgModule({
  declarations: [
    CapitalComponent
  ],
  imports: [
    CommonModule,
    CapitalRoutingModule
  ]
})
export class CapitalModule { }
