import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBack } from '../model/FeedBack';
import { Plat } from '../model/plat';
import { FeedbackService } from '../shared/feedback.service';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-update-feedback',
  templateUrl: './update-feedback.component.html',
  styleUrls: ['./update-feedback.component.css']
})
export class UpdateFeedbackComponent implements OnInit {

  plats: Plat[] = [];
  plat: Plat = new Plat();
  listfeedbacks: any = [];
  feedbackgroup: FormGroup;
  feedback: FeedBack = new FeedBack();
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;
  constructor(private fs: FeedbackService, private router: Router,private ps:PlatService) {

    this.feedbackgroup = new FormGroup({
      body:  new FormControl('', [Validators.required, Validators.minLength(3)]),
      note: new FormControl('', Validators.minLength(4)),
      plat_id: new FormControl('',Validators.required)
    });
   }

  ngOnInit(): void {
      
    this.ps.getPlats().subscribe((data: Plat[]) => {
      this.plats = data
    }, (err) => {
      console.log(err);
    }
    );
  }

  get nom() { return this.feedbackgroup.get('body'); }
  get prix() { return this.feedbackgroup.get('note'); }
  get plat_id() { return this.feedbackgroup.get('plat_id'); }

  update() {
    this.fs.updateFeedbacks(this.feedback.id, this.feedback).subscribe(result => {
      alert("Une opération de modification a été effectué");
      console.log(this.feedback)
     // this.router.navigateByUrl('/plats');
    },
      (err) => {
        alert('Erreur ! Vérifiez vos informations');
      
      }
    )
  }

}
