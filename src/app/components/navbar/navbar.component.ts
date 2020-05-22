import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private apiService: ApiService, private router: Router) {
  }
  ngOnInit() {
  }

    cerrarSesion() {
    var r = confirm("Seguro que quieres cerrar sesion?");
    console.log(r);
    if (r) {
      this.router.navigate(['/login']);
    } 
  }

}
