import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBack } from '../model/FeedBack';
import { Menu } from '../model/Menu';
import { Plat } from '../model/plat';
import { TypePlat } from '../model/typeplat';
import { FeedbackService } from '../shared/feedback.service';
import { MenuService } from '../shared/menu.service';
import { PlatService } from '../shared/plat.service';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [];
  m: Menu = new Menu();
  favores: any = [];
  feedback: FeedBack = new FeedBack();
  feedbackgroup: FormGroup;
  typePlatForm: FormBuilder = new FormBuilder();
  constructor(private menuS: MenuService, private router: Router) {

   }

  ngOnInit(): void {
    this.menuS.getAllMenus().subscribe((data: Menu[]) => {
      this.menus = data
    }, (err) => {
      console.log(err);
    }
    );
 

  }


  delete(id)
  {
    this.menuS.deletemenu(id).subscribe(
      resultat => {
        alert("menu deleted");
        console.log("deleted");
        this.router.navigateByUrl('/menu');
      }, (err) => {
        console.log(err);
      }
    );
  }
  favore(f: FeedBack) {
    f.note += 1;
  }


}
