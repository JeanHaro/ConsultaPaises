import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
