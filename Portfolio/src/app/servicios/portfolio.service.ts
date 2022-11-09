import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Los observables son una colección de eventos a los que nos suscribimos para que luego nos lleguen de manera asíncrona. De esta manera, al depender de un servidor y no queremos detener la app en ese momento, lo definimos como OBSERVABLE: así los componentes que lo consuman pueden suscribirse para esperar la respuesta.

@Injectable({           // Permite que este servicio sea "inyectado" en los componentes
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5051/misDatos';

  constructor(private http:HttpClient) { }


  obtenerDatos():Observable<any>{ // Con este OBSERVABLE el componente espera la respuesta 
    return this.http.get(this.apiUrl) // El método GET acá espera un .json
  }
}
