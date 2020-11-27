import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl="http://localhost:3000/menu"

  menus: Menu[];
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }

  getAllMenus():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.menuUrl);
  }

  addMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menuUrl, menu, this.httpOptions);
  }
}
