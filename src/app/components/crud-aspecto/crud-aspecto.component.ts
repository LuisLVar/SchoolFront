import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-aspecto',
  templateUrl: './crud-aspecto.component.html',
  styleUrls: ['./crud-aspecto.component.css']
})
export class CrudAspectoComponent implements OnInit {

  datosTabla=[
    {aspecto:"1", nombre:"Nombre 1"},
    {aspecto:"2", nombre:"Nombre 2"},
    {aspecto:"3", nombre:"Nombre 3"},
    {aspecto:"4", nombre:"Nombre 4"}
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
      if(val.nombre.toLowerCase().search(valor.toLowerCase())>=0){
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


  aspecto="";
  nombre="";

  verTabla(){
    this.verTodo=true;
    this.agregarEditar=false;
    this.agregar=false;
    this.editar=false;
    this.filtro=this.datosTabla;
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
    this.aspecto="";
    this.nombre="";
  }

  guardarAspecto(){
    if(this.nombre.length==0){
      alert("El nombre del aspecto es obligatorio");
      return;
    }

    this.datosTabla.push({aspecto:this.aspecto, nombre:this.nombre});

    this.limpiarCampos();
    alert("Aspecto creado");
  }

  eliminarAspecto(obj){
    if(confirm("¿Esta seguro de eliminar el aspecto seleccionado?")){
      let index = this.datosTabla.indexOf(obj);
      this.datosTabla.splice(index, 1);
      this.filtro=this.datosTabla;
      alert("Se eliminó el aspecto");
    }
  }

  aspectoEnEdicion=null;

  editarAspecto(obj){
    this.aspecto=obj.aspecto;
    this.nombre=obj.nombre;
    this.aspectoEnEdicion=obj;
    this.edicion();
  }

  guardarCambios(){
    if(this.nombre.length==0){
      alert("El nombre del aspecto es obligatorio");
      return;
    }

    this.aspectoEnEdicion.aspecto=this.aspecto;
    this.aspectoEnEdicion.nombre=this.nombre;

    alert("Se guardaron los cambios");
    this.limpiarCampos();   
    this.verTabla();
  }

  cancelar(){
    this.limpiarCampos();
    this.verTabla();
  }

}
