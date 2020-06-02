import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-grado',
  templateUrl: './crud-grado.component.html',
  styleUrls: ['./crud-grado.component.css']
})
export class CrudGradoComponent implements OnInit {

  datosTabla=[
    {grado:"1", nombre:"Nombre 1"},
    {grado:"2", nombre:"Nombre 2"},
    {grado:"3", nombre:"Nombre 3"},
    {grado:"4", nombre:"Nombre 4"}
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


  grado="";
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
    this.grado="";
    this.nombre="";
  }

  guardarGrado(){
    if(this.nombre.length==0){
      alert("El nombre del grado es obligatorio");
      return;
    }

    this.datosTabla.push({grado:this.grado, nombre:this.nombre});

    this.limpiarCampos();
    alert("Grado creado");
  }

  eliminarGrado(obj){
    if(confirm("¿Esta seguro de eliminar el grado seleccionado?")){
      let index = this.datosTabla.indexOf(obj);
      this.datosTabla.splice(index, 1);
      this.filtro=this.datosTabla;
      alert("Se eliminó el grado");
    }
  }

  gradoEnEdicion=null;

  editarGrado(obj){
    this.grado=obj.grado;
    this.nombre=obj.nombre;
    this.gradoEnEdicion=obj;
    this.edicion();
  }

  guardarCambios(){
    if(this.nombre.length==0){
      alert("El nombre del grado es obligatorio");
      return;
    }

    this.gradoEnEdicion.grado=this.grado;
    this.gradoEnEdicion.nombre=this.nombre;

    alert("Se guardaron los cambios");
    this.limpiarCampos();   
    this.verTabla();
  }

  cancelar(){
    this.limpiarCampos();
    this.verTabla();
  }
}
