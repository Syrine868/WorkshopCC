import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack } from '../model/FeedBack';
import { Plat } from '../model/plat';
import { TypePlat } from '../model/typeplat';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  platUrl = "http://localhost:3000/plats";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }

  //Get plat by Id type plat
  getPlatByid( plat): Observable<Plat[]>{
    return this.http.get<Plat[]>(this.platUrl + "?id=" +plat);
  }
}
