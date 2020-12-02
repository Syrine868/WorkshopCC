import { Component, Input, OnInit } from '@angular/core';
import { Plat } from '../model/plat';

@Component({
  selector: 'app-details-plats',
  templateUrl: './details-plats.component.html',
  styleUrls: ['./details-plats.component.css']
})
export class DetailsPlatsComponent implements OnInit {
  @Input() plat: Plat;
  constructor() { }

  ngOnInit(): void {
  }

}
