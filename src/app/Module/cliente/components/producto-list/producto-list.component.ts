import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrl: './producto-list.component.scss'
})
export class ProductoListComponent {
  ventanaAbierta3 = false;
  

  abrirVentana3() {
    this.ventanaAbierta3 = true;
  }
  cerrarVentana3() {
    this.ventanaAbierta3 = false;
  }

  ver(numComensales: string, fecha: string, hora: string) {
    // Lógica para reservar mesa
    console.log('Reservando mesa...');
    this.cerrarVentana3();
  }

}
