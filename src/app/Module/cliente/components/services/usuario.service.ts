import { Injectable } from '@angular/core';
import { UsuarioRequest } from '../models/usuario-request.module';
import { UsuarioResponse } from '../models/usuario-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends CrudService<UsuarioRequest,UsuarioResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.Usuario)
  }
}
