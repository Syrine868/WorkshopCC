import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { MenuService } from '../shared/menu.service';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent implements OnInit {
  m: Menu; 
  constructor(private router: Router, private menuService: MenuService)
  { 
    this.m = new Menu();
  }


  ngOnInit(): void {
  }

  update() {
    this.menuService.updateMenu(this.m.id, this.m)
      .subscribe(
        resultat => {
          console.log("Menu updated");
          alert("Modifié!!");
          this.router.navigateByUrl('/menu');
        }, (err) => {
          console.log(err);
        }
      );
  }
}
