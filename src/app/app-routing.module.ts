import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrudAlumnoComponent } from './components/crud-alumno/crud-alumno.component';
import { CrudPersonalComponent } from './components/crud-personal/crud-personal.component';
import { CrudGradoComponent } from './components/crud-grado/crud-grado.component';
import { CrudSeccionComponent } from './components/crud-seccion/crud-seccion.component';
import { CrudAspectoComponent } from './components/crud-aspecto/crud-aspecto.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'crudAlumnos',
    component: CrudAlumnoComponent
  },
  {
    path: 'crudPersonal',
    component: CrudPersonalComponent
  },
  {
    path: 'crudGrados',
    component: CrudGradoComponent
  },
  {
    path: 'crudSeccion',
    component: CrudSeccionComponent
  },
  {
    path: 'crudAspectos',
    component: CrudAspectoComponent
  },
  {
    path: "**",
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
