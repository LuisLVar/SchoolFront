import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ModuloInscripcionComponent } from './components/modulo-inscripcion/modulo-inscripcion.component';
import { BloqueComponent } from './components/bloque/bloque.component';
import { MateriaComponent } from './components/materia/materia.component';
import { ModuloDirectorComponent } from './components/modulo-director/modulo-director.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ModuloInscripcionComponent,
    BloqueComponent,
    MateriaComponent,
    ModuloDirectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
