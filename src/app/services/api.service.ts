import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isNullOrUndefined } from 'util'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URI = 'http://192.168.0.153:3000/api';  //URL
  
  constructor(private http: HttpClient) { }

  getLogin(user:any){
    return this.http.post(`${this.API_URI}/login`, user);
  }

  public setUser(user: any) : void{
    let usr_string = JSON.stringify(user);
    localStorage.setItem('currentuser',usr_string);
  }

  public getCurrentUser(){
    let user_string = localStorage.getItem('currentuser');
    if(!isNullOrUndefined(user_string)){
      let user = JSON.parse(user_string);
      return user;
    }
    return false;
  }

  public removeUser() : void{
    localStorage.removeItem("currentuser");
  }

  public getAlumno()
  {
    return this.http.get(`${this.API_URI}/getAlmuno`);
  }
  public getSeccion()
  {
    return this.http.get(`${this.API_URI}/getSeccion`);
  }
  public inscribir(data:any)
  {
    return this.http.post(`${this.API_URI}/inscribir`, data);
  }
  public crearBloque(data:any)
  {
    return this.http.post(`${this.API_URI}/bloque`, data);
  }
  public modificarBloque(data:any)
  {
    return this.http.put(`${this.API_URI}/bloque`, data);
  }
  public eliminarBloque(data:any)
  {
    return this.http.delete(`${this.API_URI}/bloque`, data);
  }
  public getBloque()
  {
    return this.http.get(`${this.API_URI}/bloque`);
  }
  public getMateria()
  {
    return this.http.get(`${this.API_URI}/materia`);
  }
  public crearMateria(data:any)
  {
    return this.http.post(`${this.API_URI}/materia`, data);
  }
  public modificarMateria(data:any)
  {
    return this.http.put(`${this.API_URI}/materia`, data);
  }
  public eliminarMateria(data:any)
  {
    return this.http.delete(`${this.API_URI}/materia`, data);
  }
  public getYears()
  {
    return this.http.get(`${this.API_URI}/getYears`);
  }
  public getCourses()
  {
    return this.http.get(`${this.API_URI}/getCourses`);
  }
  public asigSeccionGrado(data:any)
  {
    return this.http.post(`${this.API_URI}/asigSeccionGrado`,data);
  }
  public asigMateriaGrado(data:any)
  {
    return this.http.post(`${this.API_URI}/asigMateriaGrado`,data);
  }
}
