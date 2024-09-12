import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario: string= '';

  constructor(private router: Router) { }

  ngOnInit() { 
    this.usuario = localStorage.getItem('usuario') || 'Invitado';
    }
  
  navegar(){
    this.router.navigate(['login'], {replaceUrl: true});
  }

  navegar2(){
    this.router.navigate(['cambiarcontrasena'], {replaceUrl: true});
  }


}


