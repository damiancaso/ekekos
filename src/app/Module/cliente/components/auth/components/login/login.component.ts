import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { LoginResponse } from '../../../../models/login-response.model';

// import { Input, Tab, Ripple, initMDB, InputProps, TabProps, RippleProps } from "mdb-ui-kit";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  activeTab: string = 'login'; // Inicialmente activa la pestaña de inicio de sesión

  constructor() { }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}