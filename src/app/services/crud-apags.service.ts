import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDApagsService {

  dir = "http://3.20.3.133:3010/api";

  constructor(protected http: HttpClient) { }

  /** PARA EL CRUD DE PERSONAL */

  getPersonal() {
    return this.http.get(this.dir+"/getPersonal");
    /* 
    RESPUESTA:
    {
      personal:---,
      nombre:---,
      apellido:---,
      direccion:---,
      telefono:---,
      id_personal:---,
      estado:---,
      escuela:---,
      tipo_personal:---,
      codEscuela:---,
      codTipo_personal:---
    }
    */
  }

  nuevoPersonal(nombre, apellido, direccion, telefono, estado, escuela, tipo_personal, usuario, password) {
    return this.http.post(this.dir+"/crearPersonal",
      {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        estado: estado,
        ESCUELA_escuela: escuela,
        TIPO_PERSONAL_tipo: tipo_personal,
        usuario: usuario,
        password: password
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  eliminarPersonal(personal) {
    return this.http.post(this.dir+"/eliminarPersonal",
      {
        id_personal: personal
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarPersonal(personal, nombre, apellido, direccion, telefono, estado, escuela, tipo_personal, usuario, password) {
    return this.http.post(this.dir+"/actualizarPersonal",
      {
        id_personal: personal,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        estado: estado,
        ESCUELA_escuela: escuela,
        TIPO_PERSONAL_tipo: tipo_personal,
        usuario: usuario,
        password: password
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  /************************************************************* */


  /**PARA LOS GRADOS */

  getGrados() {
    return this.http.get(this.dir+"/getGrados");
    /**
     * RESPUESTA:
     * {
     *  grado:---,
     *  nombre:---
     * },
     * {
     *  ...
     * }
     */
  }

  existeElGrado(nombre) {
    return this.http.post(this.dir+'/existeGrado', { nombre:nombre });
    /**
     * RESPUESTA: true | false
     */
  }

  nuevoGrado(nombre) {
    return this.http.post(this.dir+"/crearGrado",
      {
        nombre: nombre
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarGrado(grado, nombre) {
    return this.http.post(this.dir+"/eliminarGrado",
      {
        grado: grado,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarGrado(grado, nombre) {
    return this.http.post(this.dir+"/actualizarGrado",
      {
        grado: grado,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  /************************************************************* */


  /**PARA EL CRUD DE ASPECTOS */
  existeElAspecto(nombre) {
    return this.http.post(this.dir+'/existeAspecto',{
      nombre:nombre
    });
    /**
     * RESPUESTA: true | false
     */
  }

  getAspectos() {
    return this.http.get(this.dir+"/getAspectos");

    /**
     * RESPUESTA: TODOS LOS ASPECTOS
     * 
     * {      
     *  id:---,
        nombre:---,
     * },
       {
         ....
       }
     * 
     */
  }

  nuevoAspecto(nombre) {
    return this.http.post(this.dir+"/crearAspecto",
      {
        nombre: nombre
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarAspecto(id, nombre) {
    return this.http.post(this.dir+"/eliminarAspecto",
      {
        aspecto: id,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarAspecto(id, nombre) {
    return this.http.post(this.dir+"/actualizarAspecto",
      {
        aspecto: id,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }


  /************************************************************* */


  /**PARA EL CRUD DE ESTUDIANTE */
  existeElEstudiante(nombre, apellido, idalumno) {
    return this.http.post(this.dir+'/existeAlumno', {
      nombre:nombre,
      apellido:apellido,
      idalumno:idalumno
    });

    /**
     * RESPUESTA: true | false
     */
  }

  getEstudiantes() {
    return this.http.get(this.dir+"/getAlumnos");

    /**
     * RESPUESTA: TODOS LOS ESTUDIANTES
     * 
     * {      
     *  alumno:---,
        nombre:---,
        apellido:---,
        direccion:---,
        telefono:---,     
        id_alumno:---,   
        encargado:---,
        fecha_nacimiento:---,
        estado:---
     * },
       {
         ....
       }
     * 
     */
  }

  nuevoEstudiante(nombre, apellido, direccion, telefono, id_alumno, encargado, fecha_nacimiento, estado) {
    return this.http.post(this.dir+"/crearAlumno",
      {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        cui: id_alumno,
        encargado: encargado,
        fecha_nacimiento: fecha_nacimiento,
        estado: estado
      }
    );

    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  borrarEstudiante(id_alumno) {
    return this.http.post(this.dir+"/eliminarAlumno",
      {
        id_alumno: id_alumno
      }
    );

    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarEstudiante(alumno, nombre, apellido, direccion, telefono, id_alumno, encargado, fecha_nacimiento, estado) {
    return this.http.post(this.dir+"/actualizarAlumno",
      {
        id_alumno: alumno,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        cui: id_alumno,
        encargado: encargado,
        fecha_nacimiento: fecha_nacimiento,
        estado: estado
      }
    );

    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  /********************************************** */


  /** PARA EL CRUD DE SECCIONES */

  existeLaSeccion(nombre) {
    return this.http.post(this.dir+"/existeSeccion", { nombre:nombre });
    /**
     * RESPUESTA: true | false
     */
  }

  getTodasLasSecciones() {
    return this.http.get(this.dir+"/getSecciones");
    /* 
      RESPUESTA:
      {
        seccion:---,
        nombre:---,
        year:---,
        estado:---,
        grado:---,
        personal:---
      }
    */
  }

  nuevaSeccion(nombre, estado, grado, personal, ciclo) {
    return this.http.post(this.dir+"/crearSeccion",
      {
        nombre: nombre,
        estado: estado,
        GRADO_grado: grado,
        PERSONAL_personal: personal,
        CICLO_ciclo: ciclo
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarSeccion(seccion) {
    return this.http.post(this.dir+"/eliminarSeccion",
      {
        seccion: seccion
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarSeccion(seccion, nombre, estado, grado, personal, ciclo) {
    return this.http.post(this.dir+"/actualizarSeccion",
      {
        seccion: seccion,
        nombre: nombre,
        estado: estado,
        GRADO_grado: grado,
        PERSONAL_personal: personal,
        CICLO_ciclo: ciclo
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  getCiclos(){
    return this.http.get(this.dir+"/getCiclos");
  }

}
