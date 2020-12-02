import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../model/Menu';
import { Plat } from '../model/plat';
import { MenuService } from '../shared/menu.service';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menus: Menu[] = [];
  plats: Plat[] = [];
  m: Menu = new Menu();
  constructor(private menuS: MenuService, private router: Router,private ps:PlatService) { }

  ngOnInit(): void {
    this.ps.getPlats().subscribe((data: Plat[]) => {
      this.plats = data
    }, (err) => {
      console.log(err);
    }
    );
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
