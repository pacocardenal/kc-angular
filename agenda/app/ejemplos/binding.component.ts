import { Component } from "@angular/core";

@Component({
    selector: "ejemplos-binding",
    templateUrl: "./app/ejemplos/binding.component.html",
    styles: [
        `.mensaje-tuneado {
            background-color: deeppink;
            color: white;
        }`
    ]
})

export class BindingComponent {

    mensaje: string = "Buenas noches KeepCoders!";
    
    obtenerColumnas(): string {
        return "10";
    }

    obtenerFilas(): string {
        return "2";
    }

    tuneado: boolean = true;

    estiloEnColorAzul: string = "blue";

    mostrarMensaje(): void {
        alert("Recuerda: el problema siempre está entre la pantalla y la silla");
    }

    saludo: string;
}