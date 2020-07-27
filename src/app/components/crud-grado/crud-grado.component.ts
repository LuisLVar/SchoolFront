import { Component, OnInit } from '@angular/core';
import { CRUDApagsService } from '../../services/crud-apags.service'

@Component({
  selector: 'app-crud-grado',
  templateUrl: './crud-grado.component.html',
  styleUrls: ['./crud-grado.component.css']
})
export class CrudGradoComponent implements OnInit {

  datosTabla = [];

  filtro = [];

  constructor(protected conn: CRUDApagsService) {
    this.filtro = this.datosTabla;
  }

  ngOnInit() {
    this.refrescarTabla()
  }

  filtrar(event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtro = this.datosTabla.filter((val) => {
      if (val.nombre.toLowerCase().search(valor.toLowerCase()) >= 0) {
        return val;
      }
    });
  }

  refrescarTabla() {
    let res;
    this.conn.getGrados().subscribe(d => res = d, err => this.lanzarErr("Error al obtener los grados", err), () => {
      this.datosTabla = res;
      this.filtro = this.datosTabla;
      //console.log(res)
    });
  }

  verTodo = true;
  agregarEditar = false;
  agregar = false;
  editar = false;


  grado = "";
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
    this.grado = "";
    this.nombre = "";
  }

  guardarGrado() {
    if (this.nombre.length == 0) {
      alert("El nombre del grado es obligatorio");
      return;
    }

    let res;
    this.conn.existeElGrado(this.nombre).subscribe(d => res = d, err => this.lanzarErr("Error al verificar si existe el grado", err), () => {
      if (res.existe) {
        alert("El grado ya existe")
      } else {
        let dat;
        this.conn.nuevoGrado(this.nombre).subscribe(d => dat = d, err => this.lanzarErr("Error al crear el grado", err), () => {
          this.refrescarTabla();
          alert("Grado creado");
          this.limpiarCampos();
        });
      }
    });



  }

  eliminarGrado(obj) {
    if (confirm("¿Esta seguro de eliminar el grado seleccionado?")) {
      let dat;
      this.conn.borrarGrado(obj.grado, obj.nombre).subscribe(d=>dat=d, err=>this.lanzarErr("Error al eliminar el grado", err), ()=>{
        this.refrescarTabla();
        alert("Se eliminó el grado")
        this.limpiarCampos();
      })
    }
  }

  gradoEnEdicion = null;

  editarGrado(obj) {
    this.grado = obj.grado;
    this.nombre = obj.nombre;
    this.gradoEnEdicion = obj;
    this.edicion();
  }

  guardarCambios() {
    if (this.nombre.length == 0) {
      alert("El nombre del grado es obligatorio");
      return;
    }

    let res;
    this.conn.existeElGrado(this.nombre).subscribe(d => res = d, err => this.lanzarErr("Error al verificar si existe el grado", err), () => {
      if (res.existe) {
        alert("El nombre grado ya existe")
      } else {
        let dat;
        this.conn.actualizarGrado(this.grado, this.nombre).subscribe(d => dat = d, err => this.lanzarErr("Error al actualizar el grado", err), () => {
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
