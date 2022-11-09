import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../Modelo/usuario";
import { BehaviorSubject } from 'rxjs';
import { ProductoId } from '../Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  urlRegistrar = "https://dummyjson.com/users/add/";
  constructor(private http: HttpClient) { }
  public registrarUsuario(usuario:Usuario){
    this.http.post(this.urlRegistrar,usuario)
  }

}
