import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ModuloInscripcionComponent } from './components/modulo-inscripcion/modulo-inscripcion.component';
import { BloqueComponent } from './components/bloque/bloque.component';
import { MateriaComponent } from './components/materia/materia.component';
import { ModuloDirectorComponent } from './components/modulo-director/modulo-director.component';


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
    path: 'inscripcion',
    component: ModuloInscripcionComponent
  },
  {
    path: 'bloques',
    component: BloqueComponent
  },
  {
    path: 'materias',
    component: MateriaComponent
  },
  {
    path: 'director',
    component: ModuloDirectorComponent
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
