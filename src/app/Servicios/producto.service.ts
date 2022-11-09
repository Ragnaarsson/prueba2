import { Injectable } from '@angular/core';
import {Producto,ProductoId} from '../Modelo/producto';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public pagina : number = 1;
  public lista = new BehaviorSubject<ProductoId[]>([]);
  public listaProd$ = this.lista.asObservable();
  public urlProducto :"https://dummyjson.com/products/";
  constructor(private http:HttpClient) { }

  public listarProducto():Observable<any>{
    return this.http.get(this.urlProducto)
  }

  public obtenerPrimerosProductos(){
    this.http.get<ProductoId[]>(this.urlProducto)
}

}
