import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_user: string = ''
  mdl_pass: string = '' 
  visibleWarning: boolean = false;
  cargando: boolean =false;

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('');
  }
  navegar() {
    const storedUsuario = localStorage.getItem('usuario')
    const storedPass = localStorage.getItem('contrasena')
    this.cargando = true;

    if (this.mdl_user === storedUsuario && this.mdl_pass === storedPass){
      setTimeout(() =>{
        this.cargando = false;
      this.router.navigate(['inicio'], {replaceUrl: true});
    },1000);
    }else{
      this.cargando = false;
      this.visibleWarning = true
    }
  }  
navegarusuario(){
  this.router.navigate(['crearusuario'], {replaceUrl: true});
}

}