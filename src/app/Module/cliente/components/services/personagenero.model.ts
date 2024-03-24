import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonaGeneroRequest } from '../Models/personaGenero-request.model';
import { PersonaGeneroResponse } from '../auth/models/personaGenero-response.model';
import { CrudService } from '../shared/service/crud.service';
import { urlConstants } from '../../constans/url.constants';


@Injectable({
  providedIn: 'root'
})
export class PersonaGenero extends CrudService<PersonaGeneroRequest, PersonaGeneroResponse> {

  constructor(
    protected http: HttpClient,
  ) {
    super(http, urlConstants.personaGenero);
  }
}
