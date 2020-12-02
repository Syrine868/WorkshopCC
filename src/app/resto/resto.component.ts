import { Component, OnInit } from '@angular/core';
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
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  listTypePlats: TypePlat[] = [];
  listPlats: Plat[] = [];

  listFeedbacks: FeedBack[] = [];

  constructor(private router:Router, private ts:TypeService,private ps:PlatService, private fs:FeedbackService) { }

  ngOnInit(): void {
    this.ts.getAllTypePlat().subscribe((data: TypePlat[]) => {
      this.listTypePlats = data
    }, (err) => {
      console.log(err);
    }
    );

    this.getPs();
    this.getfs();
  }

  getfs() {
    this.fs.getFeedbackss().subscribe((data: FeedBack[]) => {
      this.listFeedbacks = data
  }, (err) => {
      console.log(err);
  }
  );
  }


  getPs() {
    this.ps.getPlats().subscribe((data: Plat[]) => {
      this.listPlats = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  getTs() {
    this.ts.getAllTypePlat().subscribe((data: TypePlat[]) => {
      this.listTypePlats = data
    }, (err) => {
      console.log(err);
    }
    );
  }
}
