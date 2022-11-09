import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/Servicios/producto.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  data : any = []
  constructor(public servicio:ProductoService) { }

  obtenerProductos(){
    this.servicio.listarProducto().
    subscribe(resp =>{
      this.data = resp;
    })

  }

  ngOnInit() {
    this.obtenerProductos();
    // this.servicio.listarProducto.subscribe
    // this.obtenerProductos()
    // console.log(this.obtenerProductos());
   this.servicio.listaProd$;
    // subscribe(resp =>{
    //   this.data = resp;
    // })
    console.log(this.data);
  }

}
