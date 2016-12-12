import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

export class Contacto {
    nombre: string;
    id: number;
}

// Para que una clase se comporte como un servicio
// es necesario decorarla con Injectable
@Injectable()
export class ContactosService {

    contactos: string[];

    private _contactos: string[] = [
      "Tim Cook",
      "Bill Gates",
      "Elon Musk"
    ];

    constructor(private _http:Http) {}

    obtenerContactos(): Observable<Contacto []> {
        return this._http
                    .get("http://localhost:3005/contactos")
                    .map((datos: Response) => {
                        return datos.json() as Contacto[];
                    });
    }

    agregarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                    .post("http://localhost:3005/contactos", contacto)
                    .map((datos: Response) => {
                        return datos.json() as Contacto;
                    });
    }

    eliminarContacto(contacto: Contacto): Observable<any> {
        return this._http
                    .delete(`http://localhost:3005/contactos/${contacto.id}`);
    }
}