import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

// Componentes
import { CapitalComponent } from "./capital.component";

const routes: Routes = [
    {
        path: '',
        component: CapitalComponent,
        data: { titulo: 'Capital' }
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CapitalRoutingModule {}