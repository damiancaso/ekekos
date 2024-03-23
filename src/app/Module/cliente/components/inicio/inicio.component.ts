import { Component, NgModule, OnInit } from '@angular/core';
import { TemplateComponent } from '../../../../template/template/template.component';
import { TemplateFooterComponent } from '../../../../template/template-footer/template-footer.component';
import { TemplateHeaderComponent } from '../../../../template/template-header/template-header.component';
import { CommonModule } from '@angular/common';
import { TemplateRoutingModule } from '../../../../template/template-routing.module';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { urlConstants } from '../../constans/url.constants';

interface Producto {
  nombre: string;
  urlImagen: string;
  precio: number;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})

export class InicioComponent implements OnInit {
    productos: Producto[] = [];
    carrito: Producto[] = [];
  
    constructor(private http: HttpClient) { }
  
    ngOnInit(): void {
      this.obtenerProductos();
    }
  
    obtenerProductos(): void {
      this.http.get<Producto[]>(urlConstants.producto)
        .subscribe(
          (response) => {
            this.productos = response;
          },
          (error) => {
            console.error('Fallo al cargar los productos', error);
          }
        );
    }
  
    agregarAlCarrito(producto: Producto): void {
      this.carrito.push(producto);
      console.log(`${producto.nombre} añadido al carrito`);
    }
}
