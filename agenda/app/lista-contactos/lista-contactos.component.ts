import { Component, OnInit } from "@angular/core";

@Component({
    selector: "lista-contactos",
    templateUrl: "./app/lista-contactos/lista-contactos.component.html"
})

export class ListaContactosComponent implements OnInit {

  contactos: string[];

  // El método 'ngOnInit' viene dado por la interfaz "OnInit"
  // que es el hook en el cual inicializamos los valores del
  // componente
  ngOnInit(): void {
    this.contactos = [
      "Tim Cook",
      "Bill Gates",
      "Elon Musk"
    ]; 
  }

}