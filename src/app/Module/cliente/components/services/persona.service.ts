import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';
import { PersonaRequest } from '../auth/models/persona-request.model';
import { PersonaResponse } from '../Models/persona-response.model';

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
