import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DniServiceService } from '../../service/dni-service.service';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.scss'
})
export class RegistroClienteComponent {
  
  email: string="";
  fechaNacimiento: Date = new Date();
  
  guardarFechaEnSQLServer(): void {
    // Convertimos la fecha a formato ISO
    const fechaISO = new Date(this.fechaNacimiento).toISOString();
    
    // Aquí puedes enviar la fecha a tu backend para guardarla en SQL Server
    console.log('Fecha en formato ISO para SQL Server:', fechaISO);
  }
  persona: any = {};

  constructor(private dniService: DniServiceService) { }

  buscarDni(dni: string): void {
    this.dniService.buscarPorDni(dni).subscribe(
      (data) => {
        this.persona = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error al buscar DNI:', error);
      }
    );
  }
}
