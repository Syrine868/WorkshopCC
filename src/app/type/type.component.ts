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
  typeplat: TypePlat[] = [];
  tp: TypePlat = new TypePlat();
  constructor(private ts: TypeService, private router: Router) { }

  ngOnInit(): void {
    this.ts.getAllTypePlat().subscribe((data: TypePlat[]) => {
      this.typeplat = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  delete(id)
  {
    this.ts.deletety(id).subscribe(
      resultat => {
        alert("type plat deleted");
        console.log("Supprimé !");
        this.router.navigateByUrl('/type');
      }, (err) => {
        console.log(err);
      }
    );
  }

}
