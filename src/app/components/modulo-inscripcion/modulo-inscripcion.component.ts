import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-modulo-inscripcion',
  templateUrl: './modulo-inscripcion.component.html',
  styleUrls: ['./modulo-inscripcion.component.css']
})
export class ModuloInscripcionComponent implements OnInit {

  constructor(private servicioHttp: ApiService) { }

  ngOnInit() {
    this.alumnos = this.servicioHttp.getAlumno();
    this.secciones = this.servicioHttp.getSeccion();
  }

  alumnos:any;
  secciones:any;
  selectedAlumno:any;
  selectedSeccion:any;

  inscribir()
  {
    let data = { alumno:this.selectedAlumno, seccion:this.selectedSeccion };
    this.servicioHttp.inscribir(data);
  }
}
