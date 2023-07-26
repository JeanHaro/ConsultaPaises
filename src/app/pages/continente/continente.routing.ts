import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Componentes
import { ContinenteComponent } from './continente.component';

const routes: Routes = [
    {
        path: '',
        component: ContinenteComponent,
        data: { titulo: 'Continente' }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContinenteRoutingModule {}