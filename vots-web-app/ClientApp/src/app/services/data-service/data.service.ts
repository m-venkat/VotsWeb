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
      
   }

  GetVotsMenu(): Observable<VotsMenuItem[]> {
    //return this.httpClient.get<VotsMenuItem[]>(window.location.protocol + '//' + window.location.host + '/assets/json/menudata.json', this.httpOptions);
    return this.httpClient.get<VotsMenuItem[]>('assets/json/MenuData.json', this.httpOptions);
  }


}
