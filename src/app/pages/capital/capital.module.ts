import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos
import { ComponentsModule } from 'src/app/components/components.module';

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
    RouterModule,
    ComponentsModule
  ]
})
export class CapitalModule { }
