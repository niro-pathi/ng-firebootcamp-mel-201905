import { Injectable } from '@angular/core';
import { Company } from './company';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  API_BASE = 'http://firebootcamp-crm-api.azurewebsites.net/api';

  getCompanies(): Observable<Company[]> {
    // retrun this.httpClient.get<Company[]>(this.API_BASE + '/company');
    return this.httpClient.get<Company[]>(`${this.API_BASE}/company`);
  }
}
