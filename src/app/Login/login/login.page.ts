import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import {UsuarioService} from '../../Servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioRegistro : FormGroup;
  constructor(private servicio:UsuarioService,private fb: FormBuilder,private http:HttpClient) {
    this.armarFormulario();
  }

  public guardarUsuario(){
    let f = this.formularioRegistro.value;
    this.servicio.registrarUsuario(f);

  }

  public armarFormulario():void{
    this.formularioRegistro = this.fb.group({
      firstName : new FormControl('', [Validators.required,Validators.minLength(1),Validators.maxLength(15)]),
      lastName : new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
      age : new FormControl(0, [Validators.required,Validators.min(18),Validators.max(98)]),
      username : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      password :new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      birthDate : new FormControl('', Validators.required),
      gender : new FormControl('', Validators.required)
  })
}

  ngOnInit() {

}

}
