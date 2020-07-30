import { Component, OnInit } from '@angular/core';
import { CRUDApagsService } from '../../services/crud-apags.service';
import { emptyScheduled } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-crud-personal',
  templateUrl: './crud-personal.component.html',
  styleUrls: ['./crud-personal.component.css']
})
export class CrudPersonalComponent implements OnInit {

  datosTabla = [];
  filtro = [];

  tiposPersonal = [];

  verpwd=false;

  constructor(protected conn: CRUDApagsService) {
    this.filtro = this.datosTabla;
  }

  ngOnInit() {
    this.refrescarTabla();
  }

  refrescarTabla() {
    let res;
    this.conn.getPersonal().subscribe(d => res = d, err => this.lanzarErr("Error al obtener la informacion del personal", err), () => {
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
      if ((val.nombre + " " + val.apellido).toLowerCase().search(valor) >= 0 || val.id_personal.toLowerCase().search(valor) >= 0) {
        return val;
      }
    });
  }

    //MANEJO DE LA INTERFAZ
  verTodo = true;
  agregarEditar = false;
  agregar = false;
  editar = false;


  //VARIABLES QUE CON LAS QUE SE INTERACTUA EN EL FORMULARIO Y CONEXION A LA API
  personal = "";
  nombre = "";
  apellido = "";
  direccion = "";
  telefono = "";
  //identificacion="";
  estado = "1";
  tipo_personal = "2";
  usuario = "";
  password = "";

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
    this.personal = "";
    this.nombre = "";
    this.apellido = "";
    this.direccion = "";
    this.telefono = "";
    //this.identificacion="";
    this.estado = "1";
    this.tipo_personal = "2";
    this.usuario = "";
    this.password = "";
    this.personalEnEdicion = null;
  }

  guardarPersonal() {
    if (this.nombre.length == 0 || this.usuario.length == 0 || this.password.length == 0) {
      alert("El nombre, apellido, estado, tipo de personal, usuario y contraseña del personal son obligatorios");
      return;
    }

    if (this.tipo_personal.length == 0) {
      alert("No ha seleccionado si es Director o Docente");
      return;
    }

    if (this.estado.length > 1) {
      alert("El estado no puede tener más de un carácter");
      return;
    }

    let dat;
    this.conn.nuevoPersonal(this.nombre, this.apellido, this.direccion, this.telefono, this.estado, 1, this.tipo_personal, this.usuario, this.password)
      .subscribe(d => dat = d, err => this.lanzarErr("Error al crear un nuevo trabajador", err), () => {
        this.refrescarTabla();
        alert("Trabajador creado")
        this.limpiarCampos();
      });
  }

  eliminarPersonal(obj) {
    if (confirm("¿Esta seguro de eliminar el personal seleccionado?")) {
      let dat;
      this.conn.eliminarPersonal(obj.id_personal).subscribe(d=>dat=d, err=>this.lanzarErr("Error al tratar de eliminar al trabajador", err), ()=>{
        this.refrescarTabla();
        alert("Trabajador eliminado");
      });

    }
  }

  personalEnEdicion = null;

  editarPersonal(obj) {
    this.personal = obj.id_personal;
    this.nombre = obj.nombre;
    this.apellido = obj.apellido;
    this.direccion = obj.direccion;
    this.telefono = obj.telefono;
    this.estado = obj.estado;
    this.tipo_personal = obj.tipo_personal_tipo;
    this.usuario = obj.usuario;
    this.password = obj.password;
    this.personalEnEdicion = obj;
    this.edicion();
  }

  guardarCambios() {
    if (this.nombre.length == 0 || this.apellido.length == 0 || this.estado.length == 0 || this.usuario.length == 0 || this.password.length == 0) {
      alert("El nombre, apellido, estado, usuario y contraseña del personal son obligatorios");
      return;
    }

    if (this.tipo_personal.length == 0) {
      alert("No ha seleccionado el tipo de personal");
      return;
    }

    if (this.estado.length > 1) {
      alert("El estado no puede tener más de un carácter");
      return;
    }

    let dat;
    this.conn.actualizarPersonal(this.personal, this.nombre, this.apellido, this.direccion, this.telefono, this.estado, 1, this.tipo_personal, this.usuario, this.password)
      .subscribe(d => dat = d, err => this.lanzarErr("Error al actualizar al trabajador", err), () => {
        this.refrescarTabla();
        alert("Se guardaron los cambios");
        this.limpiarCampos();
        this.verTabla();
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
