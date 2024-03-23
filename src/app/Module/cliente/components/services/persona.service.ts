import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaRequest } from '../models/persona-request.module';
import { PersonaResponse } from '../models/persona-response.module';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends CrudService<PersonaRequest,PersonaResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.persona)
  }
}
