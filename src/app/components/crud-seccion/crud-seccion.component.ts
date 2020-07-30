import { Component, OnInit } from '@angular/core';
import { CRUDApagsService } from '../../services/crud-apags.service'
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-crud-seccion',
  templateUrl: './crud-seccion.component.html',
  styleUrls: ['./crud-seccion.component.css']
})
export class CrudSeccionComponent implements OnInit {

  datosTabla = [/*
    { seccion: "1", nombre: "A", id_grado: "1", n_grado: "Primero", id_personal: "1", n_personal: "Nombre 1", a_personal: "Apellido 1", id_ciclo: "2", year: "2020", estado: "A" },
    { seccion: "2", nombre: "A", id_grado: "1", n_grado: "Primero", id_personal: "2", n_personal: "Nombre 2", a_personal: "Apellido 2", id_ciclo: "2", year: "2021", estado: "A" },
    { seccion: "3", nombre: "B", id_grado: "2", n_grado: "Segundo", id_personal: "3", n_personal: "Nombre 1", a_personal: "Apellido 1", id_ciclo: "2", year: "2020", estado: "I" },
    { seccion: "4", nombre: "B", id_grado: "2", n_grado: "Segundo", id_personal: "4", n_personal: "Nombre 2", a_personal: "Apellido 2", id_ciclo: "2", year: "2021", estado: "I" }
  */];

  datosTablaGrados = [];

  datosTablaPersonal = [/*
    { personal: "1", nombre: "Nombre 1", apellido: "Apellido 1", direccion: "direccion 1", telefono: "1111", id_personal: "111AAA", estado: "A", tipo_personal: "1", usuario: "Usuario1", password: "123" },
    { personal: "2", nombre: "Nombre 2", apellido: "Apellido 2", direccion: "direccion 2", telefono: "2222", id_personal: "222BBB", estado: "B", tipo_personal: "2", usuario: "Usuario2", password: "123" },
    { personal: "3", nombre: "Nombre 3", apellido: "Apellido 3", direccion: "direccion 3", telefono: "3333", id_personal: "333CCC", estado: "C", tipo_personal: "1", usuario: "Usuario3", password: "123" },
    { personal: "4", nombre: "Nombre 4", apellido: "Apellido 4", direccion: "direccion 4", telefono: "4444", id_personal: "444DDD", estado: "D", tipo_personal: "2", usuario: "Usuario4", password: "123" }
  */];

  datosTablaCiclo = [/*
    { ciclo: "1", year: "2019" },
    { ciclo: "2", year: "2020" },
    { ciclo: "3", year: "2021" },
    { ciclo: "4", year: "2022" }
  */];

  filtro = [];
  filtroPersonal = [];
  filtroGrado = [];
  filtroCiclo = [];

  constructor(protected conn: CRUDApagsService) {
    this.filtro = this.datosTabla;
    this.filtroPersonal = this.datosTablaPersonal;
    this.filtroGrado = this.datosTablaGrados;
    this.filtroCiclo = this.datosTablaCiclo;
  }

  ngOnInit() {
    this.refrescarTabla()
  }


  refrescarTabla() {
    let res;
    this.conn.getTodasLasSecciones().subscribe(d => res = d, err => this.lanzarErr("Error al obtener los grados", err), () => {
      this.datosTabla = res;
      this.filtro = this.datosTabla;
      //console.log(res)
    });

    let res2;
    this.conn.getGrados().subscribe(d => res2 = d, err => this.lanzarErr("Error al obtener los grados", err), () => {
      this.datosTablaGrados = res2;
      this.filtroGrado = this.datosTablaGrados;
      //console.log(res)
    });

    let res3;
    this.conn.getPersonal().subscribe(d => res3 = d, err => this.lanzarErr("Error al obtener los grados", err), () => {
      this.datosTablaPersonal = res3;
      this.filtroPersonal = this.datosTablaPersonal;
      //console.log(res)
    });

    let res4;
    this.conn.getCiclos().subscribe(d => res4 = d, err => this.lanzarErr("Error al obtener los grados", err), () => {
      this.datosTablaCiclo = res4;
      this.filtroCiclo = this.datosTablaCiclo;
      //console.log(res)
    });
  } 

  fSeccion = ""; fDocente = ""; fGrado = ""; fCiclo = "";

  filtrar() {
    this.filtro = this.datosTabla;
    if (this.fSeccion.length > 0) {
      this.filtro = this.filtro.filter((val) => {
        if (val.nombre.toLowerCase().search(this.fSeccion.toLowerCase()) >= 0) {
          return val;
        }
      });
    }

    if (this.fDocente.length > 0) {
      this.filtro = this.filtro.filter((val) => {
        if ((val.n_personal + " " + val.a_personal).toLowerCase().search(this.fDocente.toLowerCase()) >= 0) {
          return val;
        }
      });
    }

    if (this.fGrado.length > 0) {
      this.filtro = this.filtro.filter((val) => {
        if (val.n_grado.toLowerCase().search(this.fGrado.toLowerCase()) >= 0) {
          return val;
        }
      });
    }

    if (this.fCiclo.length > 0) {
      this.filtro = this.filtro.filter((val) => {
        if (val.year.toLowerCase().search(this.fCiclo.toLowerCase()) >= 0) {
          return val;
        }
      });
    }
  }

  filtrarPersonal(event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtroPersonal = this.datosTablaPersonal.filter((val) => {
      if ((val.nombre + " " + val.apellido).toLowerCase().search(valor.toLowerCase()) >= 0) {
        return val;
      }
    });
  }

  filtrarGrado(event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtroGrado = this.datosTablaGrados.filter((val) => {
      if ((val.nombre).toLowerCase().search(valor.toLowerCase()) >= 0) {
        return val;
      }
    });
  }

  filtrarCiclo(event) {
    const valor = (event.target as HTMLInputElement).value;
    this.filtroCiclo = this.datosTablaCiclo.filter((val) => {
      if ((val.year).toLowerCase().search(valor.toLowerCase()) >= 0) {
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
  seccion = "";
  nombre = "";
  estado = "1";

  codGrado = "";
  codPersonal = "";
  codCiclo = "";

  nomPersonal = "";
  nomGrado = "";
  nomCiclo = "";

  //MANEJO DE ID CUANDO SE SELECCIONA GRADO, PERSONAL, CICLO
  setPersonal(v) {
    this.codPersonal = v.id_personal;
    this.nomPersonal = v.nombre
  }

  setGrado(v) {
    this.codGrado = v.grado;
    this.nomGrado = v.nombre;
  }

  setCiclo(v) {
    this.codCiclo = v.ciclo;
    this.nomCiclo = v.year;
  }

  verTabla() {
    this.verTodo = true;
    this.agregarEditar = false;
    this.agregar = false;
    this.editar = false;
    this.filtro = this.datosTabla;
    this.filtroPersonal = this.datosTablaPersonal;
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
    this.seccion = "";
    this.nombre = "";
    this.estado = "1";
    this.codGrado="";
    this.codPersonal="";
    this.codCiclo="";
    this.nomGrado="";
    this.nomCiclo="";
    this.nomPersonal="";
  }

  guardarSeccion() {
    if (!this.validarCampos()) {
      return;
    }

    let dat;
    this.conn.nuevaSeccion(this.nombre, this.estado, this.codGrado, this.codPersonal, this.codCiclo)
      .subscribe(d => dat = d, err => this.lanzarErr("Error al crear una nueva sección", err), () => {
        this.refrescarTabla();
        alert("Seccion creada");
        this.limpiarCampos();
      });

  }

  eliminarSeccion(obj) {
    if (confirm("¿Esta seguro de eliminar el sección seleccionado?")) {
      let dat;
      this.conn.borrarSeccion(obj.seccion).subscribe(d => dat = d, err => this.lanzarErr("Error al tratar de eliminar la seccion", err), () => {
        this.refrescarTabla();
        alert("Se eliminó el seccion");
      });
    }
  }

  seccionEnEdicion = null;

  editarSeccion(obj) {
    this.seccion = obj.seccion;
    this.nombre = obj.nombre;
    this.estado = obj.estado;

    this.codPersonal = obj.id_personal;
    this.nomPersonal = obj.nombre_personal

    this.codGrado = obj.grado;
    this.nomGrado = obj.nombre_grado;

    this.codCiclo = obj.ciclo;
    this.nomCiclo = obj.year;


    this.seccionEnEdicion = obj;
    this.edicion();
  }

  guardarCambios() {
    if (!this.validarCampos()) {
      console.log("fuera")
      return;
    }

    let dat;
    this.conn.actualizarSeccion(this.seccion, this.nombre, this.estado, this.codGrado, this.codPersonal, this.codCiclo)
      .subscribe(d => dat = d, err => this.lanzarErr("Error al actualizar la sección", err), () => {
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

  validarCampos() {
    if (this.nombre.length == 0 || this.estado.length == 0) {
      alert("El nombre y estado de la sección son obligatorios");
      return false;
    }

    if (this.estado.length > 1) {
      alert("El estado solo puede tener un carácter")
      return false;
    }

    if (this.codGrado.length==0) {
      alert("No ha seleccionado el grado a la que pertenece la sección");
      return false;
    }

    if (this.codPersonal.length==0) {
      alert("No ha seleccionado al docente de la sección");
      return false;
    }

    if (this.codCiclo.length==0) {
      alert("No ha seleccionado el ciclo al que pertenece la sección");
      return false;
    }

    return true;
  }

  lanzarErr(msg, err) {
    alert(msg + "\n-- MAS INFORMACIÓN: Ver la consola ---\n");
    console.log(err);
  }

}
