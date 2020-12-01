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

  plats: any = [];
  @Input() plat: Plat;
  @Output() addp = new EventEmitter<Plat>();
  constructor() { 

  }


  ngOnInit(): void {
  }

  add_plat(p:Plat) {
    this.addp.emit(p);
     
  }

  

  
}
