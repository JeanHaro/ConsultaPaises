import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Componentes
import { PaisComponent } from "./pais.component"; 

const routes: Routes = [
    {
        path: '',
        component: PaisComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PaisRoutingModule {}