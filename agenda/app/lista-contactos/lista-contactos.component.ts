import { Component } from "@angular/core";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html"
})

export class ListaContactosComponent {
   contactos : string[] = [
     "Tim Cook",
     "Bill Gates",
     "Elon Musk"
   ]; 
}