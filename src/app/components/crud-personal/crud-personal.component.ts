import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-personal',
  templateUrl: './crud-personal.component.html',
  styleUrls: ['./crud-personal.component.css']
})
export class CrudPersonalComponent implements OnInit {

  datosTabla=[
    {personal:"1", nombre:"Nombre 1", apellido:"Apellido 1", direccion:"direccion 1", telefono:"1111", id_personal:"111AAA", estado:"A", tipo_personal:"1", usuario:"Usuario1", password:"123"},
    {personal:"2", nombre:"Nombre 2", apellido:"Apellido 2", direccion:"direccion 2", telefono:"2222", id_personal:"222BBB", estado:"B", tipo_personal:"2", usuario:"Usuario2", password:"123"},
    {personal:"3", nombre:"Nombre 3", apellido:"Apellido 3", direccion:"direccion 3", telefono:"3333", id_personal:"333CCC", estado:"C", tipo_personal:"1", usuario:"Usuario3", password:"123"},
    {personal:"4", nombre:"Nombre 4", apellido:"Apellido 4", direccion:"direccion 4", telefono:"4444", id_personal:"444DDD", estado:"D", tipo_personal:"2", usuario:"Usuario4", password:"123"}
  ];

  filtro=[];

  constructor() { 
    this.filtro=this.datosTabla;
  }

  ngOnInit() {
  }

  filtrar(event){
    const valor = ((event.target as HTMLInputElement).value).toLowerCase();
    this.filtro=this.datosTabla.filter((val)=>{
      if((val.nombre+" "+val.apellido).toLowerCase().search(valor)>=0 || val.id_personal.toLowerCase().search(valor)>=0){
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


  personal="";
  nombre="";
  apellido="";
  direccion="";
  telefono="";
  identificacion="";
  estado="";
  tipo_personal="";
  usuario="";
  password="";

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
    this.personal="";
    this.nombre="";
    this.apellido="";
    this.direccion="";
    this.telefono="";
    this.identificacion="";
    this.estado="";  
    this.tipo_personal="";
    this.usuario="";
    this.password="";
    this.personalEnEdicion=null;
  }

  guardarPersonal(){
    if(this.nombre.length==0 || this.usuario.length==0 || this.password.length==0){
      alert("El nombre, apellido, estado, tipo de personal, usuario y contraseña del personal son obligatorios");
      return;
    }

    if(this.tipo_personal.length==0){
      alert("No ha seleccionado si es Director o Docente");
      return;
    }

    if(this.estado.length>1){
      alert("El estado no puede tener más de un carácter");
      return;
    }

    this.datosTabla.push({personal:this.personal, nombre:this.nombre, apellido:this.apellido, direccion:this.direccion,
                          telefono:this.telefono, id_personal:this.identificacion, estado:this.estado, 
                          tipo_personal:this.tipo_personal, usuario:this.usuario, password:this.password});

    this.limpiarCampos();
    alert("Personal creado");
  }

  eliminarPersonal(obj){
    if(confirm("¿Esta seguro de eliminar el personal seleccionado?")){
      let index = this.datosTabla.indexOf(obj);
      this.datosTabla.splice(index, 1);
      this.filtro=this.datosTabla;
      alert("Se eliminó el personal");
    }
  }

  personalEnEdicion=null;

  editarPersonal(obj){
    this.personal=obj.personal;
    this.nombre=obj.nombre;
    this.apellido=obj.apellido;
    this.direccion=obj.direccion;
    this.telefono=obj.telefono;
    this.identificacion=obj.id_personal;
    this.estado=obj.estado;
    this.tipo_personal=obj.tipo_personal;
    this.usuario=obj.usuario;
    this.password=obj.password;
    this.personalEnEdicion=obj;
    this.edicion();
  }

  guardarCambios(){
    if(this.nombre.length==0 || this.apellido.length==0 || this.estado.length==0 || this.usuario.length==0 || this.password.length==0){
      alert("El nombre, apellido, estado, usuario y contraseña del personal son obligatorios");
      return;
    }

    if(this.tipo_personal.length==0){
      alert("No ha seleccionado el tipo de personal");
      return;
    }

    if(this.estado.length>1){
      alert("El estado no puede tener más de un carácter");
      return;
    }

    this.personalEnEdicion.personal=this.personal;
    this.personalEnEdicion.nombre=this.nombre;
    this.personalEnEdicion.apellido=this.apellido;
    this.personalEnEdicion.direccion=this.direccion;
    this.personalEnEdicion.telefono=this.telefono;
    this.personalEnEdicion.id_personal=this.identificacion;
    this.personalEnEdicion.estado=this.estado;
    this.personalEnEdicion.tipo_personal=this.tipo_personal;
    this.personalEnEdicion.usuario=this.usuario;
    this.personalEnEdicion.password=this.password;
    this.personalEnEdicion.personalEnEdicion=this;

    alert("Se guardaron los cambios");
    this.limpiarCampos();   
    this.verTabla();
  }

  cancelar(){
    this.limpiarCampos();
    this.verTabla();
  }

}
