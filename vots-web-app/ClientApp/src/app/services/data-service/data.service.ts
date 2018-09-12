import { Injectable } from '@angular/core';
import {  VotsMenuItem } from '../../models/MenuModels';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) {
      this.baseUrl = environment.baseUrl;
   }

  GetVotsMenu(): Observable<VotsMenuItem[]> {
    return this.httpClient.get<VotsMenuItem[]>(this.baseUrl + 'assets/json/MenuData.json', this.httpOptions);
  }


}