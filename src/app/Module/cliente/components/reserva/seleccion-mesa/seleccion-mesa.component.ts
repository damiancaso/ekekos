import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-mesa',
  templateUrl: './seleccion-mesa.component.html',
  styleUrl: './seleccion-mesa.component.scss'
})
export class SeleccionMesaComponent {
  ventanaAbierta = false;

  abrirVentana() {
    this.ventanaAbierta = true;
  }

  cerrarVentana() {
    this.ventanaAbierta = false;
  }

  reservar(numComensales: string, fecha: string, hora: string) {
    // Lógica para reservar mesa
    console.log('Reservando mesa...');
    this.cerrarVentana();
  }
}
