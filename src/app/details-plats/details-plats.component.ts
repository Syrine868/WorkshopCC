import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from '../model/plat';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-details-plats',
  templateUrl: './details-plats.component.html',
  styleUrls: ['./details-plats.component.css']
})
export class DetailsPlatsComponent implements OnInit {
  @Input() plat: Plat;
  constructor(private ps:PlatService, private router:Router) { }

  ngOnInit(): void {
  }

  delete(id)
  {
    this.ps.deleteplats(id).subscribe(
      resultat => {
        alert("Plat supprimé");
        this.router.navigateByUrl('/plats');
      }, (err) => {
        console.log(err);
      }
    );
  }

}
