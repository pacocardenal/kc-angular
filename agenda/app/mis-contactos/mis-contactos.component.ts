import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { ContactosService } from '../contactos.service';
import { Contacto } from '../contacto';

@Component({
    templateUrl: "./app/mis-contactos/mis-contactos.component.html"
})

export class MisContactosComponent implements OnInit { 

listaContactos: Contacto[];
  contactoSeleccionado: Contacto;

  // Hacemos la inyección de dependencias del servicio
  // Aprovechamos que TypeScript crea un atributo de aquellos
  // argumentos que tienen modificador de acceso y están tipados
  constructor(
    private _contactosService: ContactosService,
    private _activatedRoute: ActivatedRoute) { }

  // El método 'ngOnInit' viene dado por la interfaz "OnInit"
  // que es el hook en el cual inicializamos los valores del
  // componente
  ngOnInit(): void {
    this._activatedRoute.data.forEach((data: { contactos: Contacto[] }) => {
      this.listaContactos = data.contactos;
    });
  }

  agregarContacto(contacto: Contacto): void {

    this._contactosService
        .agregarContacto(contacto)
        .subscribe((nuevoContacto: Contacto) => this._actualizarListaContactos());

  }

  eliminarContacto(contacto: Contacto): void {

    if (confirm(`¿Estás seguro de eliminar a ${contacto.nombre}`)) {
      this._contactosService
          .eliminarContacto(contacto)
          .subscribe(() => {
            this.contactoSeleccionado = null;
            this.listaContactos = this.listaContactos.filter((c: Contacto) => c.id !== contacto.id);
          })
    }

  }

  verDetallesContacto(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;
  }

  navegarRuta(ruta: string): void {
    window.open(ruta, "_blank");
  }

}