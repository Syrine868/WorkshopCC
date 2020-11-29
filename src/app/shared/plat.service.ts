import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
import { Plat } from '../model/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  platUrl = "http://localhost:3000/plats";

  constructor(private http: HttpClient) { }

  getMenu(): Observable<Object> {
    return this.http.get<Object>('http://localhost:3000/menu');
  }


  getPLatByMenu(): Observable<Plat[]> {
    return this.getMenu().pipe(
      mergeMap((menubyplat) => {
        return this.http.get<Plat[]>(this.platUrl+'/?menu=' + menubyplat['menu'])
      })
    )
  }


  addPlat(plat: Plat): Observable<Plat> {
    return this.http.post<Plat>(this.platUrl, plat, this.httpOptions);
  }
  getPlats(plat: Plat): Observable<Plat[]> {
    return this.http.get<Plat[]>(this.platUrl);
  }
  updatePlat(id: number, plat: Plat): Observable<Plat>{
    return this.http.put<Plat>(this.platUrl+ '/' + id , plat , this.httpOptions);
  }

  
  deletemenu(plat: Plat | number): Observable<Plat>{
    const id = typeof plat === 'number' ? plat : plat.id;
    const url = this.platUrl + '/' + id;
    console.log(url);

    return this.http.delete<Plat>(url);
  }
}
