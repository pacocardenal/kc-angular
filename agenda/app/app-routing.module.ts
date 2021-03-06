import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { MisContactosComponent } from './mis-contactos/mis-contactos.component';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { ContactosResolve } from "./contactos-resolve.service";

// Definimos las rutas de nuestra aplicación
const rutas: Routes = [
    {
        path: "mis-contactos",
        component: MisContactosComponent,
        resolve: {
            contactos: ContactosResolve
        }
    },
    {
        path: "nuevo-contacto",
        component: NuevoContactoComponent
    },
    {
        path: "**",
        redirectTo: "/mis-contactos"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})

export class AppRoutingModule { }