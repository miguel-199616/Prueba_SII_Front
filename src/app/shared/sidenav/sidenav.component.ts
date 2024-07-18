import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Constantes } from 'src/app/utils/constantes';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, AfterViewInit {
  routerEvents: any;
  urlActual!:string;

  public menu:any=[
    {
      nombre:Constantes.TITULO_MENU_EMPLEADOS,
      imagen:'assets/imagenes/icono-menu-empleado.png',
      descripcionImagen:Constantes.DESCRIPCION_IMAGEN_EMPLEADOS,
      subMenu:[
        {
          nombre: Constantes.TITULO_MENU_CONSULTAR_EMPLEADOS,
          ruta:'empleados/consultarEmpleados'
        },
        {
          nombre: Constantes.TITULO_MENU_CREAR_EMPLEADOS,
          ruta:'empleados/crearEmpleados'
        }
        
      ]
    }
  ];

  constructor(private router:Router) { 
    this.routerEvents = this.router.events.subscribe(
      (event:any)=>{
        if(event instanceof NavigationEnd){
          this.urlActual=event.url;
          let urlSplit = window.location.href.split('/');
          let last = urlSplit[urlSplit.length-1];
          if(this.urlActual=='/bienvenida' || last=='bienvenida') {
            $('.lista').children().children().removeClass("activated");
            $('opcionesSubMenu').children().children().removeClass("selected");
          }

        }
      }
    );
  }
  ngAfterViewInit(): void {
    $('nav').on("mouseleave", function (){
      $('.link').removeClass("activate");
      $('.opcionesSubMenu').removeClass("show");
      $('.chevron').removeClass("rotate");
    });

    $('.link').on("click", function(){
      $(this).addClass("activate");
      $(this).parent().parent().siblings().children().children().removeClass("activate");
      $(this).siblings().toggleClass("show");
      $(this).children().siblings(".chevron").toggleClass("rotate");
    });

    $('.opcionesSubMenu').on("click", function(){
      $(this).addClass("selected");
      $(this).parent().siblings().children().removeClass("selected");
      $(this).parent().parent().siblings().addClass("activated");
      $(this).parent().parent().parent().parent().siblings().children().children().removeClass("activated");
      $(this).parent().parent().parent().parent().siblings().children().children().children().children().removeClass("selected");
     
    });
    
  }

  ngOnInit(): void {
  }

}
