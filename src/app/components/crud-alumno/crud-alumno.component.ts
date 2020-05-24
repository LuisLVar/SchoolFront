import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-alumno',
  templateUrl: './crud-alumno.component.html',
  styleUrls: ['./crud-alumno.component.css']
})
export class CrudAlumnoComponent implements OnInit {

  datosTabla=[
    {alumno:"1", nombre:"Nombre 1", apellido:"Apellido 1", direccion:"direccion 1", telefono:"1111", id_alumno:"111AAA", fecha_nacimiento:"2020-01-01", estado:"A"},
    {alumno:"2", nombre:"Nombre 2", apellido:"Apellido 2", direccion:"direccion 2", telefono:"2222", id_alumno:"222BBB", fecha_nacimiento:"2020-02-02", estado:"B"},
    {alumno:"3", nombre:"Nombre 3", apellido:"Apellido 3", direccion:"direccion 3", telefono:"3333", id_alumno:"333CCC", fecha_nacimiento:"2020-03-03", estado:"C"},
    {alumno:"4", nombre:"Nombre 4", apellido:"Apellido 4", direccion:"direccion 4", telefono:"4444", id_alumno:"444DDD", fecha_nacimiento:"2020-04-04", estado:"D"}
  ];

  filtro=[];

  constructor() {
      this.filtro=this.datosTabla;
  }

  ngOnInit() {
  }

  filtrar(event){
    const valor = (event.target as HTMLInputElement).value;
    this.filtro=this.datosTabla.filter((val)=>{
      if((val.nombre+" "+val.apellido).search(valor)>=0 || val.id_alumno.search(valor)>=0
        || val.fecha_nacimiento.search(valor)>=0){
        return val;
      }
    });
  }

  refrescarTabla(){
    //MANDAR A LLAMAR LA CONSULTA
  }

  verTodo=true;
  agregarEditar=false;
  agregar=false;
  editar=false;


  alumno="";
  nombre="";
  apellido="";
  direccion="";
  telefono="";
  identificacion="";
  fecha_nacimiento="";
  estado="";

  verTabla(){
    this.verTodo=true;
    this.agregarEditar=false;
    this.agregar=false;
    this.editar=false;
  }

  nuevo(){
    this.verTodo=false;
    this.agregarEditar=true;
    this.agregar=true;
    this.editar=false;
  }

  edicion(){
    this.verTodo=false;
    this.agregarEditar=true;
    this.agregar=false;
    this.editar=true;
  }

  limpiarCampos(){
    this.alumno="";
    this.nombre="";
    this.apellido="";
    this.direccion="";
    this.telefono="";
    this.identificacion="";
    this.fecha_nacimiento="";
    this.estado="";
    this.alumnoEnEdicion=null;
  }

  guardarAlumno(){
    if(this.nombre.length==0 || this.apellido.length==0){
      alert("El nombre y apellido del alumno son obligatorios");
      return;
    }

    if(this.estado.length>1){
      alert("El estado no puede tener más de un carácter");
      return;
    }

    alert(`
    ${this.alumno}\n
    ${this.nombre}\n
    ${this.apellido}\n
    ${this.direccion}\n
    ${this.telefono}\n
    ${this.identificacion}\n
    ${this.fecha_nacimiento}\n
    ${this.estado}\n
    `);

    this.datosTabla.push({alumno:this.alumno, nombre:this.nombre, apellido:this.apellido, direccion:this.direccion,
                          telefono:this.telefono, id_alumno:this.identificacion, fecha_nacimiento:this.fecha_nacimiento,
                          estado:this.estado});

    this.limpiarCampos();
  }

  eliminarAlumno(obj){
    if(confirm("¿Desea eliminar al alumno?")){
      let index = this.datosTabla.indexOf(obj);
      this.datosTabla.splice(index, 1);
      this.filtro=this.datosTabla;
      alert("Se eliminó el alumno");
    }
  }

  alumnoEnEdicion=null;

  editarAlumno(obj){
    this.alumno=obj.alumno;
    this.nombre=obj.nombre;
    this.apellido=obj.apellido;
    this.direccion=obj.direccion;
    this.telefono=obj.telefono;
    this.identificacion=obj.id_alumno;
    this.fecha_nacimiento=obj.fecha_nacimiento;
    this.estado=obj.estado;
    this.alumnoEnEdicion=obj;
    this.edicion();
  }

  guardarCambios(){
    if(this.nombre.length==0 || this.apellido.length==0){
      alert("El nombre y apellido del alumno son obligatorios");
      return;
    }

    if(this.estado.length>1){
      alert("El estado no puede tener más de un carácter");
      return;
    }

    this.alumnoEnEdicion.alumno=this.alumno;
    this.alumnoEnEdicion.nombre=this.nombre;
    this.alumnoEnEdicion.apellido=this.apellido;
    this.alumnoEnEdicion.direccion=this.direccion;
    this.alumnoEnEdicion.telefono=this.telefono;
    this.alumnoEnEdicion.id_alumno=this.identificacion;
    this.alumnoEnEdicion.fecha_nacimiento=this.fecha_nacimiento;
    this.alumnoEnEdicion.estado=this.estado;
    this.alumnoEnEdicion.alumnoEnEdicion=this;

    alert("Se guardaron los cambios");
    this.limpiarCampos();   
  }

  cancelar(){
    this.limpiarCampos();
    this.verTabla();
  }

}
