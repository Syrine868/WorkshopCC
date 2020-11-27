import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];
  m: Menu = new Menu();
  constructor(private menuS: MenuService, private router: Router) { }

  ngOnInit(): void {
    this.menuS.getAllMenus().subscribe((data: Menu[]) => {
      this.menus = data
    }, (err) => {
      console.log(err);
    }
    );


  }

}
