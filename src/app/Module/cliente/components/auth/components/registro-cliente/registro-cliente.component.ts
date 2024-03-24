import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DniServiceService } from '../../service/dni-service.service';
import { PersonaRequest } from '../../models/persona-request.model';
import { PersonaGeneroResponse } from '../../models/personaGenero-response.model';
import { PersonaService } from '../../../services/persona.service';
import { PersonaResponse } from '../../../Models/persona-response.model';
import { format } from 'date-fns';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss'] // Corrección: 'styleUrls' en lugar de 'styleUrl'
})
export class RegistroClienteComponent implements OnInit {
  
  @Input() title: string = "";
  @Input() accion: number = 0;
  @Input() personaGenero: PersonaGeneroResponse[] = [];
  @Output() closeModalEmmit = new EventEmitter<boolean>();
  
   today = new Date();
   year = this.today.getFullYear();
   month = this.today.getMonth() + 1; // Los meses comienzan desde 0
   day = this.today.getDate();

  myForm!:FormGroup;
  personas: PersonaRequest = new PersonaRequest();
  fechaNacimiento: Date = new Date();
  persona: any = {};

  constructor(
    private dniService: DniServiceService,
    private fb: FormBuilder,
    private _persona: PersonaService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
   

  initForm(): void {
    this.myForm = this.fb.group({
      IdPersona: [{ value: 0, disabled: true }, [Validators.required]], // Cambio: 'desisabled' a 'disabled'
      IdPersonTipoDocumento: [null, [Validators.required]],
      NroDocumento: [null, [Validators.required]],
      Nombre: [null, [Validators.required]],
      ApPaterno: [null, [Validators.required]],
      ApMaterno: [null, [Validators.required]],
      NombreCompleto: [null, [Validators.required]],
      fechaNacimiento: [null, [Validators.required]], // Cambio: 'fechaNacimiento' a minúsculas
      IdGenero: [{value:1, disabled: true }, [Validators.required]],
      Email: [null, [Validators.required]],
      Celular: [null, [Validators.required]],
      UsuarioCrea: [null],
      UsuarioActualiza: [null], // Corrección: 'UsarioActualiza' a 'UsuarioActualiza'
      FechaCrea: [`${this.year}-${this.month.toString().padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`, [Validators.required]],
      FechaActualiza: [`${this.year}-${this.month.toString().padStart(2, '0')}-${this.day.toString().padStart(2, '0')}`, [Validators.required]],
      IdTipoPersona: [{value: 1,disabled:true}, [Validators.required]],
      IdUbica: [null ],
    });
  }

  guardar(): void {
    this.personas = this.myForm.getRawValue();
    console.log(this.personas);
    this._persona.create(this.personas).subscribe({
      next: (data: PersonaResponse) => {
        alert("Persona creada correctamente");
      },
      error: () => {
        alert("Ocurrió un error al crear la persona");
      },
      complete: () => {
        this.cerrarModal(true);
      }
    });
  }

  cerrarModal(res: boolean): void {
    this.closeModalEmmit.emit(res);
  }

  guardarFechaEnSQLServer(): void {
    // Convertimos la fecha a formato ISO
    const fechaISO = new Date(this.fechaNacimiento).toISOString();
    // Aquí puedes enviar la fecha a tu backend para guardarla en SQL Server
    console.log('Fecha en formato ISO para SQL Server:', fechaISO);
  }

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
  formatFecha(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Los meses comienzan desde 0
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
