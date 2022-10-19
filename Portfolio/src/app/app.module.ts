import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { SoftwareComponent } from './software/software.component';
import { ExperienciaLaboralComponent } from './experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './educacion/educacion.component';
import { DatosDeContactoComponent } from './datos-de-contacto/datos-de-contacto.component';
import { MandameUnMensajeComponent } from './mandame-un-mensaje/mandame-un-mensaje.component';

@NgModule({
  declarations: [
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
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
