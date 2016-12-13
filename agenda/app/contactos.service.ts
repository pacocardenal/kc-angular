import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import { Contacto } from "./contacto";

// Para que una clase se comporte como un servicio
// es necesario decorarla con Injectable
@Injectable()
export class ContactosService {

    private _rutaApiContactos: string = "http://localhost:3005/contactos"
    constructor(private _http:Http) {}

    obtenerContactos(): Observable<Contacto []> {
        return this._http
                    .get(this._rutaApiContactos)
                    .map((datos: Response) => {
                        return datos.json() as Contacto[];
                    });
    }

    agregarContacto(contacto: Contacto): Observable<Contacto> {
        return this._http
                    .post(this._rutaApiContactos, contacto)
                    .map((datos: Response) => {
                        return datos.json() as Contacto;
                    });
    }

    eliminarContacto(contacto: Contacto): Observable<any> {
        return this._http
                    .delete(`${this._rutaApiContactos}/${contacto.id}`);
    }
}