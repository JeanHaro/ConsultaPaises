import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Componentes
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/pais',
        pathMatch: 'full',
      },
      {
        path: 'capital',
        loadChildren: () => import('./pages/capital/capital.module').then(m => m.CapitalModule)
      },
      {
        path: 'pais',
        loadChildren: () => import('./pages/pais/pais.module').then(m => m.PaisModule)
      },
      {
        path: 'continente',
        loadChildren: () => import('./pages/continente/continente.module').then(m => m.ContinenteModule)
      }
    ]
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
