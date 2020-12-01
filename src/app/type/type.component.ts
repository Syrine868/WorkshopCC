import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypePlat } from '../model/typeplat';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  typeplats: TypePlat[] = [];
  tp: TypePlat = new TypePlat();
  currentItem = 'Television';

  constructor(private ts: TypeService, private router: Router) { }

  ngOnInit(): void {
    this.ts.getAllTypePlat().subscribe((data: TypePlat[]) => {
      this.typeplats = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  delete(id)
  {
    this.ts.deleteTypse(id).subscribe(
      res => {
        
        alert("type plat deleted");
        this.router.navigateByUrl('/type');
      }
    );
  }

}
