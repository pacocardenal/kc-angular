import { Component, Output, EventEmitter } from "@angular/core";
import { Contacto } from "../contacto";

@Component({
    selector: "formulario-contacto",
    templateUrl: "./app/formulario-contacto/formulario-contacto.component.html"
})

export class FormularioContactoComponent {

    contacto: Contacto = new Contacto();

    @Output() nuevoContacto: EventEmitter<Contacto> = new EventEmitter();
    notificarCreacionContacto(): void {
        this.nuevoContacto.emit(this.contacto);
    } 

}