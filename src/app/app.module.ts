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
import { CrudPersonalComponent } from './components/crud-personal/crud-personal.component';
import { CrudGradoComponent } from './components/crud-grado/crud-grado.component';
import { CrudSeccionComponent } from './components/crud-seccion/crud-seccion.component';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { CrudAspectoComponent } from './components/crud-aspecto/crud-aspecto.component';
import { CRUDApagsService } from './services/crud-apags.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ModuloInscripcionComponent,
    BloqueComponent,
    MateriaComponent,
    ModuloDirectorComponent,
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
  providers: [CRUDApagsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
