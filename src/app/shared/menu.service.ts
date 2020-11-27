import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../model/Menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuUrl = "http://localhost:3000/menu";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  getAllMenus():Observable<Menu[]>{
    return this.http.get<Menu[]>(this.menuUrl);
  }

  addMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.menuUrl, menu, this.httpOptions);
  }

  getMenuByid(id): Observable<Menu>{
    return this.http.get<Menu>(this.menuUrl + '/' + id);
    
  }

  updateMenu(id: number, menu: Menu): Observable<Menu>{
    return this.http.put<Menu>(this.menuUrl+ '/' + id , menu , this.httpOptions);
  }

  deletemenu(menu: Menu | number): Observable<Menu>{
    const id = typeof menu === 'number' ? menu : menu.id;
    const url = this.menuUrl + '/' + id;
    console.log(url);

    return this.http.delete<Menu>(url);
  }
}
