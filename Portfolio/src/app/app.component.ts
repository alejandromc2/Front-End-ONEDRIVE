/* Los componentes -como este archivo- son lo que controlan y definen lo que se muestra en pantalla. 

Este archivo no es mas que una CLASE */

import { Component } from '@angular/core'; 
import persona from 'src/assets/data/data.json';
@Component({      // @Component es un DECORADOR y especifica la METADATA del componente. DEFINE el componente e identifica la CLASE y su METADATA
                  // La METADATA de un componente le dice a angular dónde obtener los bloques de construcción para presentar ese componente y su VISTA.
  selector: 'app-root', // Acá se define sólo la etiqueta: aquella etiqueta por la cual vamos a referenciar en el HTML
  templateUrl: './app.component.html', // Acá definimos donde está el template, es decir, la VISTA
  styleUrls: ['./app.component.css'] // Acá definimos el estilo propio del componente. SOLO del componente. Para configurar los estilos generales 
})
export class AppComponent {
  title = 'Portfolio';

  persona: any = persona;
}
