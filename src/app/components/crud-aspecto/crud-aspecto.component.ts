import { Component, OnInit } from '@angular/core';
import { CRUDApagsService } from "../../services/crud-apags.service"
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-crud-aspecto',
  templateUrl: './crud-aspecto.component.html',
  styleUrls: ['./crud-aspecto.component.css']
})



export class CrudAspectoComponent implements OnInit {
  datosTabla = [];

  filtro = [];

  constructor(protected conn: CRUDApagsService) {
    this.filtro = this.datosTabla;
  }

  refrescarTabla() {
    let res;
    this.conn.getAspectos().subscribe(d => res = d, err => this.lanzarErr("Error al obtener los aspectos",err), () => {
      this.datosTabla = res;
      this.filtro = this.datosTabla;
      //console.log(res)
    });
  }

  ngOnInit() {
    this.refrescarTabla();
  }

  filtrar(event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtro = this.datosTabla.filter((val) => {
      if (val.nombre.toLowerCase().search(valor.toLowerCase()) >= 0) {
        return val;
      }
    });
  }

  verTodo = true;
  agregarEditar = false;
  agregar = false;
  editar = false;


  aspecto = "";
  nombre = "";

  verTabla() {
    this.verTodo = true;
    this.agregarEditar = false;
    this.agregar = false;
    this.editar = false;
    this.filtro = this.datosTabla;
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
    this.aspecto = "";
    this.nombre = "";
  }

  guardarAspecto() {
    if (this.nombre.length == 0) {
      alert("El nombre del aspecto es obligatorio");
      return;
    }

    let res;
    this.conn.existeElAspecto(this.nombre).subscribe(d => res = d, err => this.lanzarErr("Error al verificar si existe el aspecto",err), () => {
      if (res.existe) {
        alert("El aspecto ya existe");
        this.refrescarTabla();
      } else {
        let dat;
        this.conn.nuevoAspecto(this.nombre).subscribe(d => dat = d, err => this.lanzarErr("Error al crear el nuevo aspecto",err), () => {
          //console.log(dat);
          alert("Aspecto creado");
          this.refrescarTabla();
          this.limpiarCampos();
        });
      }
    });    
  }

  eliminarAspecto(obj) {
    if (confirm("¿Esta seguro de eliminar el aspecto seleccionado?")) {
      let dat;
      this.conn.borrarAspecto(obj.aspecto, obj.nombre).subscribe(d => dat = d, err => this.lanzarErr("Error al eliminar el aspecto",err), () => {
        alert("Se eliminó el aspecto");
        this.refrescarTabla();
      });      
    }
  }

  aspectoEnEdicion = null;

  editarAspecto(obj) {
    this.aspecto = obj.aspecto;
    this.nombre = obj.nombre;
    this.aspectoEnEdicion = obj;
    this.edicion();
  }

  guardarCambios() {
    if (this.nombre.length == 0) {
      alert("El nombre del aspecto es obligatorio");
      return;
    }


    let res;
    this.conn.existeElAspecto(this.nombre).subscribe(d => res = d, err => this.lanzarErr("Error al verificar si existe el aspecto",err), () => {
      if (res.existe) {
        alert("El nombre del aspecto ya existe");
        this.refrescarTabla();
        this.verTabla();
      } else {
        let dat;
        this.conn.actualizarAspecto(this.aspecto, this.nombre).subscribe(d => dat = d, err => this.lanzarErr("Error al tratar de modificar el aspecto",err), () => {
          alert("Se guardaron los cambios");
          this.limpiarCampos();
          this.refrescarTabla();
          this.verTabla();
        });
      }
    });
  }

  cancelar() {
    this.limpiarCampos();
    this.verTabla();
  }

  lanzarErr(msg,err){
    alert(msg+"\n-- MAS INFORMACIÓN: Ver la consola ---\n");
    console.log(err);
  }

}
