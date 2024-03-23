import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DniServiceService {

  private apiUrl = 'https://dniruc.apisperu.com/api/v1/dni/';
  private token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImkyMjEyNjkxQGNvbnRpbmVudGFsLmVkdS5wZSJ9.SEj7duN0IOOYtXF1581q1jsIuMBwY50g_CSmKpa6VRA';

  constructor(private http: HttpClient) { }

  buscarPorDni(dni: string): Observable<any> {
    const url = `${this.apiUrl}${dni}?token=${this.token}`;
    return this.http.get<any>(url);
  }
}
