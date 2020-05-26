import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-seccion',
  templateUrl: './crud-seccion.component.html',
  styleUrls: ['./crud-seccion.component.css']
})
export class CrudSeccionComponent implements OnInit {

  datosTabla=[
    {seccion:"1", nombre:"A", id_grado:"1", n_grado:"Primero", id_personal:"1", n_personal:"Nombre 1", a_personal:"Apellido 1", id_ciclo:"2", year:"2020", estado:"A"},
    {seccion:"2", nombre:"B", id_grado:"1", n_grado:"Primero", id_personal:"2", n_personal:"Nombre 2", a_personal:"Apellido 2", id_ciclo:"2", year:"2020", estado:"A"},
    {seccion:"3", nombre:"A", id_grado:"2", n_grado:"Segundo", id_personal:"3", n_personal:"Nombre 3", a_personal:"Apellido 3", id_ciclo:"2", year:"2020", estado:"I"},
    {seccion:"4", nombre:"B", id_grado:"2", n_grado:"Segundo", id_personal:"4", n_personal:"Nombre 4", a_personal:"Apellido 4", id_ciclo:"2", year:"2020", estado:"I"}
  ];

  datosTablaGrados=[
    {grado:"1", nombre:"Primero"},
    {grado:"2", nombre:"Segundo"},
    {grado:"3", nombre:"Tercero"},
    {grado:"4", nombre:"Cuarto"}
  ];

  datosTablaPersonal=[
    {personal:"1", nombre:"Nombre 1", apellido:"Apellido 1", direccion:"direccion 1", telefono:"1111", id_personal:"111AAA", estado:"A", tipo_personal:"1", usuario:"Usuario1", password:"123"},
    {personal:"2", nombre:"Nombre 2", apellido:"Apellido 2", direccion:"direccion 2", telefono:"2222", id_personal:"222BBB", estado:"B", tipo_personal:"2", usuario:"Usuario2", password:"123"},
    {personal:"3", nombre:"Nombre 3", apellido:"Apellido 3", direccion:"direccion 3", telefono:"3333", id_personal:"333CCC", estado:"C", tipo_personal:"1", usuario:"Usuario3", password:"123"},
    {personal:"4", nombre:"Nombre 4", apellido:"Apellido 4", direccion:"direccion 4", telefono:"4444", id_personal:"444DDD", estado:"D", tipo_personal:"2", usuario:"Usuario4", password:"123"}
  ];

  datosTablaCiclo=[
    {ciclo:"1", year:"2019"},
    {ciclo:"2", year:"2020"},
    {ciclo:"3", year:"2021"},
    {ciclo:"4", year:"2022"}
  ];

  filtro=[];
  filtroPersonal=[];
  filtroGrado=[];
  filtroCiclo=[];

  constructor() { 
    this.filtro=this.datosTabla;
    this.filtroPersonal=this.datosTablaPersonal;
    this.filtroGrado=this.datosTablaGrados;
    this.filtroCiclo=this.datosTablaCiclo;
  }

  ngOnInit() {
  }

  filtrar(event){
    const valor = (event.target as HTMLInputElement).value;
    this.filtro=this.datosTabla.filter((val)=>{
      if(val.nombre.toLowerCase().search(valor.toLowerCase())>=0
        || (val.n_personal+" "+val.a_personal).toLowerCase().search(valor.toLowerCase())>=0
        || val.n_grado.toLowerCase().search(valor.toLowerCase())>=0 || val.year.toLowerCase().search(valor.toLowerCase())>=0){
        return val;
      }
    });
  }

  filtrarPersonal(event){
    const valor = (event.target as HTMLInputElement).value;
    this.filtroPersonal=this.datosTablaPersonal.filter((val)=>{
      if((val.nombre+" "+val.apellido).toLowerCase().search(valor.toLowerCase())>=0){
        return val;
      }
    });
  }

  filtrarGrado(event){
    const valor = (event.target as HTMLInputElement).value;
    this.filtroGrado=this.datosTablaGrados.filter((val)=>{
      if((val.nombre).toLowerCase().search(valor.toLowerCase())>=0){
        return val;
      }
    });
  }

  filtrarCiclo(event){
    const valor = (event.target as HTMLInputElement).value;
    this.filtroCiclo=this.datosTablaCiclo.filter((val)=>{
      if((val.year).toLowerCase().search(valor.toLowerCase())>=0){
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


  seccion="";
  nombre="";
  estado="";
  grado=null;
  personal=null;
  ciclo=null;

  verTabla(){
    this.verTodo=true;
    this.agregarEditar=false;
    this.agregar=false;
    this.editar=false;
    this.filtro=this.datosTabla;
    this.filtroPersonal=this.datosTablaPersonal;
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
    this.seccion="";
    this.nombre="";
    this.estado="";
    this.grado=null;
    this.personal=null;
    this.ciclo=null;
  }

  contador=5;
  guardarSeccion(){
    if(!this.validarCampos()){
      console.log("fuera")
      return;
    }


    this.datosTabla.push({seccion:""+(this.contador++), nombre:this.nombre, id_grado:this.grado.grado, n_grado:this.grado.nombre, 
                          id_personal:this.personal.personal, n_personal:this.personal.nombre, a_personal:this.personal.apellido, id_ciclo:this.ciclo.ciclo, year:this.ciclo.year,
                          estado:this.estado});

    this.limpiarCampos();
    alert("Seccion creada");
  }

  eliminarSeccion(obj){
    if(confirm("¿Esta seguro de eliminar el seccion seleccionado?")){
      let index = this.datosTabla.indexOf(obj);
      this.datosTabla.splice(index, 1);
      this.filtro=this.datosTabla;
      alert("Se eliminó el seccion");
    }
  }

  seccionEnEdicion=null;

  editarSeccion(obj){
    this.seccion=obj.seccion;
    this.nombre=obj.nombre;
    this.estado=obj.estado;

    for(let i=0; i<this.datosTablaPersonal.length; i++){
      let p = this.datosTablaPersonal[i];
      if(p.personal==obj.id_personal){
        this.personal=p;
        break;
      }
    }

    for(let i=0; i<this.datosTablaGrados.length; i++){
      let g = this.datosTablaGrados[i];
      if(g.grado==obj.id_grado){
        this.grado=g;
        break;
      }
    }

    for(let i=0; i<this.datosTablaCiclo.length; i++){
      let c = this.datosTablaCiclo[i];
      if(c.ciclo==obj.id_ciclo){
        this.ciclo=c;
        break;
      }
    }

    this.seccionEnEdicion=obj;
    this.edicion();
  }

  guardarCambios(){
    if(!this.validarCampos()){
      console.log("fuera")
      return;
    }

    this.seccionEnEdicion.seccion=this.seccion;
    this.seccionEnEdicion.nombre=this.nombre;
    this.seccionEnEdicion.estado=this.estado;

    this.seccionEnEdicion.id_personal=this.personal.personal;
    this.seccionEnEdicion.n_personal=this.personal.nombre;
    this.seccionEnEdicion.a_personal=this.personal.apellido;

    this.seccionEnEdicion.id_grado=this.grado.grado;
    this.seccionEnEdicion.n_grado=this.grado.nombre;

    this.seccionEnEdicion.id_ciclo=this.ciclo.ciclo;
    this.seccionEnEdicion.year=this.ciclo.year;

    alert("Se guardaron los cambios");
    this.limpiarCampos();   
    this.verTabla();
  }

  cancelar(){
    this.limpiarCampos();
    this.verTabla();
  }

  validarCampos(){
    if(this.nombre.length==0 || this.estado.length==0){
      alert("El nombre y estado de la sección son obligatorios");
      return false;
    }

    if(this.estado.length>1)
    {
      alert("El estado solo puede tener un carácter")
      return false;
    }

    if(this.grado==null){
      alert("No ha seleccionado el grado a la que pertenece la sección");
      return false;
    }

    if(this.personal==null){
      alert("No ha seleccionado al docente de la sección");
      return false;
    }

    if(this.ciclo==null){
      alert("No ha seleccionado el ciclo al que pertenece la sección");
      return false;
    }

    return true;
  }

}
