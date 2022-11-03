/* Los COMPONENTES de angular deben estar agrupados en MÓDULOS. Este es el módulo que nos provee
Angular: es un módulo inicial, un módulo raíz. Se pueden crear tantos como quieran. Los módulos 
permiten agrupar componentes, según criterios que pueden varias de acuerdo ac ada proyecto.
Proporcionan un CONTEXTO DE COMPILACIÓN que van a hacer a la página, por tanto son 
sumamente importantes. Al igual que los componentes, son una clase decorada por NgModule */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SoftwareComponent } from './componentes/software/software.component';
import { ExperienciaLaboralComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { DatosDeContactoComponent } from './componentes/datos-de-contacto/datos-de-contacto.component';
import { MandameUnMensajeComponent } from './componentes/mandame-un-mensaje/mandame-un-mensaje.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({ // Al igual que los componentes, son una clase decorada por NgModule. Le va a permitir a angular dónde están los bloques que necesita para su construcción. Por ejemplo, cuáles son los bloques incluídos en el módulo 
  declarations: [ //  En este [] se declaran los componentes que se van a incluir en el modulo
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SobreMiComponent,
    SoftwareComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    DatosDeContactoComponent,
    MandameUnMensajeComponent
  ],
  imports: [ // Acá se indican los bloques que se necesitan importar
    BrowserModule,
    HttpClientModule
  ],
  providers: [], // Esto sería para incluir un SERVICIO, en caso de que se necesite consumir uno
  bootstrap: [AppComponent] // Esto va a indicar el MÓDULO RAÍZ
})
export class AppModule { }
