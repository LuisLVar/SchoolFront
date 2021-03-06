import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-bloque',
  templateUrl: './bloque.component.html',
  styleUrls: ['./bloque.component.css']
})
export class BloqueComponent implements OnInit {

  nombreBloque:any;
  nombreBloqueMod:any;
  idBloque:any;
  bloques:any;
  constructor(private servicioHttp: ApiService) { }

  ngOnInit() {
    this.bloques = this.servicioHttp.getBloque();
  }

  

  crearBloque()
  {
    console.log(this.nombreBloque);
    this.servicioHttp.crearBloque(this.nombreBloque);
    this.bloques = this.servicioHttp.getBloque();
  }
  modificarBloque()
  {
    let data = {idbloque: this.idBloque, nombre: this.nombreBloqueMod}
    console.log(data);
    this.servicioHttp.modificarBloque(data);
    this.bloques = this.servicioHttp.getBloque();
  }
  modificar(data:any)
  {
    console.log(data);
    this.nombreBloqueMod = data.NOMBRE;
    this.idBloque = data.IDBLOQUE;
  }
  eliminar(data:any)
  {
    console.log(data.IDBLOQUE);
    this.servicioHttp.eliminarBloque(data.IDBLOQUE);
    this.bloques = this.servicioHttp.getBloque();
  }
}
