import { Injectable } from '@angular/core';
import { PersonaTipoDocumentoRequest } from '../models/personatipodocumento-request.module';
import { PersonaTipoDocumentoResponse } from '../models/personatipodocumento-response.module';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';

@Injectable({
  providedIn: 'root'
})
export class PersonatipodocumentoService extends CrudService<PersonaTipoDocumentoRequest,PersonaTipoDocumentoResponse>{

  constructor(
    protected http:HttpClient
  ) { 
    super(http, urlConstants.personatipodocumento)
  }
}
