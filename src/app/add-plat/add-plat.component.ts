import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plat } from '../model/plat';
import { TypePlat } from '../model/typeplat';
import { PlatService } from '../shared/plat.service';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {
  typeplats: TypePlat[] = [];
  typeplat: TypePlat = new TypePlat();
  plats: Plat[] = [];
  plat: Plat = new Plat();
  @Input() p: Plat;
  @Output() addp = new EventEmitter<Plat>();
  PlatGroup: FormGroup;
  PlatForm: FormBuilder = new FormBuilder();

  constructor(private router: Router, private ps: PlatService, private ts: TypeService) { 
    this.PlatGroup = new FormGroup({
      id: new FormControl('', Validators.required),
      nom:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      prix: new FormControl('', Validators.pattern("[1-9][0-9]*")),
      type_plat: new FormControl('', Validators.required)    
    });
  }

  ngOnInit(): void {
    this.ts.getAllTypePlat().subscribe((data: TypePlat[]) => {
      this.typeplats = data
    }, (err) => {
      console.log(err);
    }
    );
  }
  get id() { return this.PlatGroup.get('id'); }
  get nom() { return this.PlatGroup.get('nom'); }
  get prix() { return this.PlatGroup.get('prix'); }
  get type_plat() { return this.PlatGroup.get('type_plat'); }
  

  save() {
    this.ps.addPlat(this.plat).subscribe(result => {
      alert("Un nouveau plat est ajouté dans la liste");
     // this.router.navigateByUrl('/plats');
    },
      (err) => {
        alert('Erreur ! Vérifiez vos informations');
      
      }
    )
  }


}
