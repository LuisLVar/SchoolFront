import { Component, OnInit } from '@angular/core';
import { CRUDApagsService } from '../../services/crud-apags.service';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {

  datosTabla = [];

  filtro = [];

  constructor(protected conn: CRUDApagsService) {
    this.filtro = this.datosTabla;
  }

  ngOnInit() {
    this.refrescarTabla()
  }

  refrescarTabla() {
    let res;
    this.conn.getEstudiantes().subscribe(d => res = d, err => this.lanzarErr("Error al obtener los estudiantes", err), () => {
      this.datosTabla = res;
      this.filtro = this.datosTabla;
      for (let i = 0; i < this.datosTabla.length; i++) {
        let mm = this.datosTabla[i];
        mm.fecha_nacimiento = String(mm.fecha_nacimiento).substring(0, 10);
      }
    });
  }

  filtrar(event) {
    const valor = ((event.target as HTMLInputElement).value).toLowerCase();
    this.filtro = this.datosTabla.filter((val) => {
      if ((val.nombre + " " + val.apellido).toLowerCase().search(valor) >= 0 || String(val.cui).toLowerCase().search(valor) >= 0
        || val.fecha_nacimiento.toLowerCase().search(valor) >= 0) {
        return val;
      }
    });
  }


// MANEJO DE LAS VISTAS
  verTodo = true;
  agregarEditar = false;
  agregar = false;
  editar = false;

// MANEJO DE INFORMACION DE LOS FORMULARIOS Y LA API
  alumno = "";
  nombre = "";
  apellido = "";
  direccion = "";
  telefono = "";
  identificacion = "";
  encargado = "";
  fecha_nacimiento = "";
  estado = "1";

  verTabla() {
    this.verTodo = true;
    this.agregarEditar = false;
    this.agregar = false;
    this.editar = false;
  }

  nuevo() {
    this.verTodo = false;
    this.agregarEditar = true;
    this.agregar = true;
    this.editar = false;
  }

  edicion() {
    this.verTodo = false;
    this.agregarEditar = true;
    this.agregar = false;
    this.editar = true;
  }

  limpiarCampos() {
    this.alumno = "";
    this.nombre = "";
    this.apellido = "";
    this.direccion = "";
    this.telefono = "";
    this.identificacion = "";
    this.encargado = "";
    this.fecha_nacimiento = "";
    this.estado = "1";
    this.alumnoEnEdicion = null;
  }

  guardarAlumno() {
    if (this.nombre.length == 0 || this.apellido.length == 0) {
      alert("El nombre y apellido del alumno son obligatorios");
      return;
    }

    if (this.estado.length > 1) {
      alert("El estado no puede tener más de un carácter");
      return;
    }

    if (this.fecha_nacimiento.length == 0) {
      alert("Ingrese la fecha de nacimiento")
      return;
    }

    if (this.identificacion.length == 0) {
      alert("Ingrese la identificacion del alumno")
      return;
    }

    let arrEst;
    this.conn.getEstudiantes().subscribe(d => arrEst = d, err => this.lanzarErr("Error al obtener los estudiantes", err), () => {

      let arrEst = this.datosTabla.filter((val) => {
        if (String(val.cui).toLowerCase().trim().search(this.identificacion.toLowerCase().trim()) >= 0) {
          return val;
        }
      });

      if (arrEst.length > 0) {
        alert("El id del alumno ya esta registrado");
        this.refrescarTabla();
      } else {
        let dat;
        this.conn.nuevoEstudiante(this.nombre, this.apellido, this.direccion, this.telefono, this.identificacion, this.encargado, this.fecha_nacimiento, this.estado)
          .subscribe(d => dat = d, err => this.lanzarErr("Error al crear un nuevo alumno", err), () => {
            alert("Alumno creado")
            this.refrescarTabla();
            this.limpiarCampos();
          })
      }
    });
  }

  eliminarAlumno(obj) {
    if (confirm("¿Desea eliminar al alumno?")) {
      let dat;
      this.conn.borrarEstudiante(obj.id_alumno).subscribe(d => dat = d, err => this.lanzarErr("Error al eliminar al estudiante", err), () => {
        this.refrescarTabla();
        alert("¡Listo!, el estudiante paso a un estado eliminado");
      });
    }
  }

  alumnoEnEdicion = null;

  editarAlumno(obj) {
    this.alumno = obj.id_alumno;
    this.nombre = obj.nombre;
    this.apellido = obj.apellido;
    this.direccion = obj.direccion;
    this.telefono = obj.telefono;
    this.identificacion = obj.cui;
    this.encargado = obj.encargado;
    this.fecha_nacimiento = obj.fecha_nacimiento;
    this.estado = obj.estado;
    this.alumnoEnEdicion = obj;
    this.edicion();
  }

  guardarCambios() {
    if (this.nombre.length == 0 || this.apellido.length == 0) {
      alert("El nombre y apellido del alumno son obligatorios");
      return;
    }

    if (this.estado.length > 1) {
      alert("El estado no puede tener más de un carácter");
      return;
    }

    if (this.fecha_nacimiento.length == 0) {
      alert("Ingrese la fecha de nacimiento")
      return;
    }

    if (this.identificacion.length == 0) {
      alert("Ingrese la identificacion del alumno")
      return;
    }

    let arrEst;
    this.conn.getEstudiantes().subscribe(d => arrEst = d, err => this.lanzarErr("Error al obtener los estudiantes", err), () => {

      let arrEst = this.datosTabla.filter((val) => {
        if (String(val.cui).toLowerCase().trim().search(this.identificacion.toLowerCase().trim()) >= 0) {
          return val;
        }
      });

      if (arrEst.length > 0) {
        alert("El id del alumno ya esta registrado");
        this.refrescarTabla();
      } else {
        let dat;
        this.conn.actualizarEstudiante(this.alumno, this.nombre, this.apellido, this.direccion, this.telefono, this.identificacion, this.encargado, this.fecha_nacimiento, this.estado)
          .subscribe(d => dat = d, err => this.lanzarErr("Error al actualizar el alumno", err), () => {
            this.refrescarTabla();
            alert("Se guardaron los cambios");
            this.limpiarCampos();
            this.verTabla();
          });
      }
    });


  }

  cancelar() {
    this.limpiarCampos();
    this.verTabla();
  }

  lanzarErr(msg, err) {
    alert(msg + "\n-- MAS INFORMACIÓN: Ver la consola ---\n");
    console.log(err);
  }

}
