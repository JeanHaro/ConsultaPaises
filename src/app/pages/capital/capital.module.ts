import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

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
    CapitalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CapitalModule { }
