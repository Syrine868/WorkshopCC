import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from '../model/plat';
import { PlatService } from '../shared/plat.service';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  color: string;
  plats: any = [];
  @Input() item: string;
  @Output() addp = new EventEmitter<Plat>();

  
  constructor(private ps: PlatService) { 

  }

  selectedPlat: Plat;
  onSelect(plat: Plat): void {
    this.selectedPlat = plat;
  }
  ngOnInit(): void {

    this.ps.getPlats().subscribe((data: Plat[]) => {
      this.plats = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  add_plat(p:Plat) {
    this.addp.emit(p);
     
  }

  

  
}
