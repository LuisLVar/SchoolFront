import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modulo-director',
  templateUrl: './modulo-director.component.html',
  styleUrls: ['./modulo-director.component.css']
})
export class ModuloDirectorComponent implements OnInit {

  constructor(private servicioHttp: ApiService) { }

  ngOnInit() {
    this.years = this.servicioHttp.getYears();
    this.courses = this.servicioHttp.getCourses();
    this.materias = this.servicioHttp.getMateria();
    this.secciones = this.servicioHttp.getSeccion();
  }
  years:any;
  courses:any;
  materias:any;
  secciones:any;

  seccion:any;
  seccionGrado:any;

  materia:any;
  materiaGrado:any;



  asigSeccion()
  {
    let data = {idseccion: this.seccion, idgrado: this.seccionGrado };
    this.servicioHttp.asigSeccionGrado(data);
  }
  asigMateria()
  {
    let data = {idmateria: this.materia, idgrado: this.materiaGrado };
    this.servicioHttp.asigMateriaGrado(data);
  }
}
