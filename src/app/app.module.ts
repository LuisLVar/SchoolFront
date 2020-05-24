import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CrudPersonalComponent } from './components/crud-personal/crud-personal.component';
import { CrudGradoComponent } from './components/crud-grado/crud-grado.component';
import { CrudSeccionComponent } from './components/crud-seccion/crud-seccion.component';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { CrudAspectoComponent } from './components/crud-aspecto/crud-aspecto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    CrudPersonalComponent,
    CrudGradoComponent,
    CrudSeccionComponent,
    CrudAlumnoComponent,
    CrudAspectoComponent
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
