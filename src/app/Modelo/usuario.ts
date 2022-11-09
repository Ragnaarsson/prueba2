export interface Usuario {
  firstName : string,
  lastName : string,
  age : number,
  username : string,
  password : string,
  birthDate : string,
  gender : string,
}

export interface UsuarioId extends Usuario {
  id : number,
}

export interface UsuariosParcial extends Partial<UsuarioId> {
  id : number
}
