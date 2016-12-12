import { Component, OnInit } from '@angular/core';
import { ContactosService } from './contactos.service';
import { Contacto } from './contacto';

@Component({
  // En 'selector' indicamos el elemento HTML en el cual
  // se instanciará el componente.
  selector: 'my-app',
  // En 'template' indicamos la vista asociada al componente
  //template: `<h1>Hello {{name}}</h1>`,
  // En 'templateUrl' indicamos la ruta a un template externo
  templateUrl: "./app/app.component.html"
  // En 'styles' establecemos los estilos que aplican
  // a nivel de componente
})
export class AppComponent implements OnInit  {

  listaContactos: Contacto[];

  // Hacemos la inyección de dependencias del servicio
  // Aprovechamos que TypeScript crea un atributo de aquellos
  // argumentos que tienen modificador de acceso y están tipados
  constructor(private _contactosService: ContactosService) { }

  private _actualizarListaContactos(): void {

    this._contactosService
        .obtenerContactos()
        .subscribe((contactos: Contacto[]) => this.listaContactos = contactos);

  }

  // El método 'ngOnInit' viene dado por la interfaz "OnInit"
  // que es el hook en el cual inicializamos los valores del
  // componente
  ngOnInit(): void {
    this._actualizarListaContactos();
  }

  agregarContacto(contacto: Contacto): void {

    this._contactosService
        .agregarContacto(contacto)
        .subscribe((nuevoContacto: Contacto) => this._actualizarListaContactos());

  }

  eliminarContacto(contacto: Contacto): void {
    this._contactosService
        .eliminarContacto(contacto)
        .subscribe(() => this._actualizarListaContactos());

  }

}