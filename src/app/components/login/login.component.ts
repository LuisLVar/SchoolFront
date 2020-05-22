import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) {
  }


  user: any = {
    id: '', 
    nombre: '',
    apellido: '',
    usuario: '',
    tipo: ''
  };

  ngOnInit() {
    this.apiService.removeUser();
  }

  iniciarSesion(){
    console.log(this.user);
    // this.apiService.getLogin(this.user).subscribe(
    //   res => {
    //     console.log(res);
    //     const objeto: any = res[0];
    //     console.log(objeto);
    //     if (objeto != undefined) {
    //       let user = {
    //         id: objeto.usuario, 
    //         nombre: objeto.nombre,
    //         user: objeto.user,
    //         password: '',
    //         telefono: objeto.telefono,
    //         tipo: objeto.tipo_tipo,
    //         local: objeto.local
    //       }
    //       if(user.tipo == "1"){
    //         alert('Bienvenido '+objeto.nombre);//Administrador
    //         this.apiService.setUser(user);
    //         this.router.navigate(['/admin/ventas']);
    //       }else if(user.tipo == "2"){
    //         alert('Bienvenido '+objeto.nombre); //Bodega
    //         this.apiService.setUser(user);
    //         this.router.navigate(['/bodega/pedidos']);
    //       }else if(user.tipo == "3"){
    //         alert('Bienvenido Local '+objeto.nombre);//Local
    //         this.apiService.setUser(user);
    //         this.router.navigate(['/local/inventario']);
    //       }else{
    //         alert('Usuario incorrecto');// Error de Usuario
    //       }
    //     } else {
    //       alert('Usuario o password incorrecto.');
    //     }
    //   },
    //   err => console.log(err)
    // );
    this.borrarForm();
  }

  borrarForm() {
    $('#pass').val('');
    $('#user').val('');
    this.user = {
      id: '', 
      nombre: '',
      apellido: '',
      usuario: '',
      tipo: ''
    }
  }

}
