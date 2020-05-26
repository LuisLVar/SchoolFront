import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CRUDApagsService {

  constructor(protected http: HttpClient) { }

  /** PARA EL CRUD DE PERSONAL */

  getPersonal() {
    return this.http.get('RUTA CONEXION');
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

  nuevoPersonal(nombre, apellido, direccion, telefono, id_personal, estado, escuela, tipo_personal, usuario, password) {
    return this.http.post("RUTA CONEXION",
      {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        id_personal: id_personal,
        estado: estado,
        escuela: escuela,
        tipo_personal: tipo_personal,
        usuario: usuario,
        password: password
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarPersonal(personal) {
    return this.http.post("RUTA CONEXION",
      {
        personal: personal
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarPersonal(personal, nombre, apellido, direccion, telefono, id_personal, estado, escuela, tipo_personal, usuario, password) {
    return this.http.post("RUTA CONEXION",
      {
        personal: personal,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        id_personal: id_personal,
        estado: estado,
        escuela: escuela,
        tipo_personal: tipo_personal,
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
    return this.http.get("RUTA CONEXION");
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
    let params = new HttpParams();
    params.set("nombre", nombre);
    return this.http.get('RUTA CONEXION', { params });
    /**
     * RESPUESTA: true | false
     */
  }

  nuevoGrado(nombre) {
    return this.http.post("RUTA CONEXION",
      {
        nombre: nombre
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarGrado(grado, nombre) {
    return this.http.post("RUTA CONEXION",
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
    return this.http.post("RUTA CONEXION",
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
    let params = new HttpParams();
    params.set("nombre", nombre);
    return this.http.get('RUTA CONEXION', { params });
    /**
     * RESPUESTA: true | false
     */
  }

  getAspectos() {
    return this.http.get('RUTA CONEXION');

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
    return this.http.post("RUTA CONEXION",
      {
        nombre: nombre
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarAspecto(id, nombre) {
    return this.http.post("RUTA CONEXION",
      {
        id: id,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarAspecto(id, nombre) {
    return this.http.post("RUTA CONEXION",
      {
        id: id,
        nombre: nombre
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }


  /************************************************************* */


  /**PARA EL CRUD DE ESTUDIANTE */
  existeElEstudiante(nombre, apellido, id_alumno) {
    let params = new HttpParams();
    params.set("nombre", nombre);
    params.set("apellido", apellido);
    params.set("id_alumno", id_alumno);
    return this.http.get('RUTA CONEXION', { params });

    /**
     * RESPUESTA: true | false
     */
  }

  getEstudiantes() {
    return this.http.get('RUTA CONEXION');

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
    return this.http.post("RUTA CONEXION",
      {
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        id_alumno: id_alumno,
        encargado: encargado,
        fecha_nacimiento: fecha_nacimiento,
        estado: estado
      }
    );

    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  borrarEstudiante(alumno, id_alumno) {
    return this.http.post("RUTA CONEXION",
      {
        alumno: alumno,
        id_alumno: id_alumno
      }
    );

    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarEstudiante(alumno, nombre, apellido, direccion, telefono, id_alumno, encargado, fecha_nacimiento, estado) {
    return this.http.post("RUTA CONEXION",
      {
        alumno: alumno,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        telefono: telefono,
        id_alumno: id_alumno,
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

  existeLaSeccion(nombre, grado) {
    let params = new HttpParams();
    params.set("nombre", nombre);
    params.set("grado", grado);
    return this.http.get('RUTA CONEXION', { params });
    /**
     * RESPUESTA: true | false
     */
  }

  getTodasLasSecciones() {
    return this.http.get('RUTA CONEXION');
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
    return this.http.post("RUTA CONEXION",
      {
        nombre: nombre,
        estado: estado,
        grado: grado,
        personal: personal,
        ciclo: ciclo
      }
    );

    /**
     * RESPUESTA: Si hay errores
     */
  }

  borrarSeccion(seccion) {
    return this.http.post("RUTA CONEXION",
      {
        seccion: seccion
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

  actualizarSeccion(seccion, nombre, estado, grado, personal, ciclo) {
    return this.http.post("RUTA CONEXION",
      {
        seccion: seccion,
        nombre: nombre,
        estado: estado,
        grado: grado,
        personal: personal,
        ciclo: ciclo
      }
    );
    /**
     * RESPUESTA: texto con errores o exito
     */
  }

}
