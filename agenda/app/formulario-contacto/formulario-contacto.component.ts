import { Component, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { Contacto } from "../contacto";

@Component({
    selector: "formulario-contacto",
    templateUrl: "./app/formulario-contacto/formulario-contacto.component.html",
    styleUrls: [ "./app/formulario-contacto/formulario-contacto.component.css"]
})

export class FormularioContactoComponent {

    @Output() nuevoContacto: EventEmitter<Contacto> = new EventEmitter();
    notificarCreacionContacto(formulario: FormGroup): void {
        console.log(formulario);
        this.nuevoContacto.emit(formulario.value as Contacto);
    } 

}