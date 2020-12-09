import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypePlat } from '../model/typeplat';
import { TypeService } from '../shared/type.service';

@Component({
  selector: 'app-update-type-plat',
  templateUrl: './update-type-plat.component.html',
  styleUrls: ['./update-type-plat.component.css']
})
export class UpdateTypePlatComponent implements OnInit {

  typeplat: TypePlat; 
  typePlatGroup: FormGroup;
  typePlatForm: FormBuilder = new FormBuilder();
  constructor(private router: Router, private ts: TypeService)
  { 
    this.typeplat = new TypePlat();

   
  }
  get id() { return this.typePlatGroup.get('id'); }
  get nom() { return this.typePlatGroup.get('nom'); }
  get description() { return this.typePlatGroup.get('description'); }

  ngOnInit(): void {
    this.typePlatGroup = this.typePlatForm.group({
      id: new FormControl('', Validators.required),
      nom:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      description:  new FormControl('',Validators.minLength(4) )
    });
  }

  update() {
    this.ts.updateMenu(this.typeplat.id, this.typeplat)
      .subscribe(
        resultat => {
          console.log("Type plat updated");
          alert("Modifié!!");
          this.router.navigateByUrl('/type');
        }, (err) => {
          console.log(err);
        }
      );
  }

}
