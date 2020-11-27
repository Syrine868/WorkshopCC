import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menus: Menu[] = [];
  m: Menu = new Menu();
  constructor(private menuS: MenuService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.menuS.addMenu(this.m).subscribe(result => {
      alert("menu ajouté");
      this.router.navigateByUrl('/menu');
    },
      (err) => {
        alert('erreur')
      
      }
    )
  }

}
