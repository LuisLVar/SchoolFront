import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  nombreMateria:any;
  contenidoMateria:any;
  nombreMateriaMod:any;
  contenidoMateriaMod:any;
  idMateria:any;
  materias:any;

  constructor(private servicioHttp: ApiService) { }

  ngOnInit() {
    this.materias = this.servicioHttp.getMateria();
  }

  crearMateria()
  {
    console.log(this.nombreMateria);
    this.servicioHttp.crearMateria(this.nombreMateria);
    this.materias = this.servicioHttp.getMateria();
  }
  modificarBloque()
  {
    let data = {idmateria: this.idMateria, nombre: this.nombreMateriaMod, contenido: this.contenidoMateriaMod}
    console.log(data);
    this.servicioHttp.modificarMateria(data);
    this.materias = this.servicioHttp.getMateria();
  }
  modificar(data:any)
  {
    console.log(data);
    this.nombreMateriaMod = data.NOMBRE;
    this.contenidoMateriaMod = data.CONTENIDO;
    this.idMateria = data.IDMATERIA;
  }
  eliminar(data:any)
  {
    console.log(data.IDMATERIA);
    this.servicioHttp.eliminarMateria(data.IDMATERIA);
    this.materias = this.servicioHttp.getMateria();
  }
}
