import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypePlat } from '../model/typeplat';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-add-type-plat',
  templateUrl: './add-type-plat.component.html',
  styleUrls: ['./add-type-plat.component.css']
})
export class AddTypePlatComponent implements OnInit {
  typeplats: TypePlat[] = [];
  typeplat: TypePlat = new TypePlat();
  typePlatGroup: FormGroup;
  typePlatForm: FormBuilder = new FormBuilder();
  constructor(private ts: TypeService, private router: Router)
  { 
    this.typePlatGroup = this.typePlatForm.group({
      id: new FormControl('', Validators.required),
      nom:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      description:  new FormControl('',Validators.minLength(4) )
    });
  }

  ngOnInit(): void {
  }

  get id() { return this.typePlatGroup.get('id'); }
  get nom() { return this.typePlatGroup.get('nom'); }
  get description() { return this.typePlatGroup.get('description'); }


  save() {
    this.ts.addTypePlat(this.typeplat).subscribe(result => {
      alert("Un nouveau Type est ajouté dans la liste");
      this.router.navigateByUrl('/type');
    },
      (err) => {
        alert('Erreur ! Vérifiez vos informations');
      
      }
    )
  }

}
