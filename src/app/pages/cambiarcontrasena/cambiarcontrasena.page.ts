import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  constructor( private router: Router) { }

  mdl_user: string =''
  mdl_pass: string =''
  mdl_pass2: string =''
  mdl_confirmarpass2: string = ''

  cambiarcontrasena(){
    const storedUsuario = localStorage.getItem('usuario');
    const storedPass = localStorage.getItem('contrasena');

    if (this.mdl_user === storedUsuario && this.mdl_pass === storedPass){
      if (this.mdl_pass2 === this.mdl_confirmarpass2){
        localStorage.setItem('contrasena', this.mdl_pass2);
        alert('Contraseña cambiada exitosamente');
        this.router.navigate(['login'], {replaceUrl: true});
    }else{
      alert('Las contraseñas nuevas no coinciden');
    }
  }else{
    alert('Usuario o contraseña incorrectos');
  }
  }
  navegar2(){
    this.router.navigate(['inicio'], {replaceUrl: true});
  }
  ngOnInit() {
  }

}
