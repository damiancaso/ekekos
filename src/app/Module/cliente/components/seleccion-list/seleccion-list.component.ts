import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-seleccion-list',
  templateUrl: './seleccion-list.component.html',
  styleUrl: './seleccion-list.component.scss'
})
export class SeleccionListComponent {

  ventanaAbierta = false;
  ventanaAbierta2 = false;

  abrirVentana() {
    this.ventanaAbierta = true;

  }abrirVentana2() {
    this.ventanaAbierta2 = true;
  }

  cerrarVentana() {
    this.ventanaAbierta = false;
  }

  cerrarVentana2() {
    this.ventanaAbierta2 = false;
  }

  reservar(numComensales: string, fecha: string, hora: string) {
    // Lógica para reservar mesa
    console.log('Reservando mesa...');
    this.cerrarVentana();
  }

  delivery(gps: string, dni: string) {
    // Lógica para reservar mesa
    console.log('Realizando delivery...');
    this.cerrarVentana2();
  }
}
