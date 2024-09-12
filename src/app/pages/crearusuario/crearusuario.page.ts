import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {

  mdl_user: string = '' ;
  mdl_pass: string = '' ;
  mdl_confirmar_pass: string = '';

  constructor(private router: Router) { }

  crearUsuario(){
    if (this.mdl_pass === this.mdl_confirmar_pass){
    localStorage.setItem('usuario', this.mdl_user);
    localStorage.setItem('contrasena', this.mdl_pass);

    this.router.navigate(['login'], {replaceUrl: true})
  }else{
    alert('Las contraseñas no coinciden');
  }
  }
  navegar2(){
    this.router.navigate(['login'], {replaceUrl: true});
  }
  ngOnInit() {
  }

}
