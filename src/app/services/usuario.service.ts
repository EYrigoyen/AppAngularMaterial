import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "eyrigoyen@gmail.com", nombre: 'Eduardo', apellido: 'Yrigoyen', sexo: 'Masculino'},
    {usuario: "jperez@gmail.com", nombre: 'Juan', apellido: 'Perez', sexo: 'Masculino'}, 
    {usuario: "mgomez@gmail.com", nombre: 'Micaela', apellido: 'Gomez', sexo: 'Femenino'},
    {usuario: "cgarcia@gmail.com", nombre: 'Carlos', apellido: 'Garcia', sexo: 'Masculino'},
    {usuario: "agamarra@gmail.com", nombre: 'Alexandra', apellido: 'Gamarra', sexo: 'Femenino'},
    {usuario: "mbellido@gmail.com", nombre: 'Mariana', apellido: 'Bellido', sexo: 'Femenino'}
  ]
  
  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }
}
