import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FeedBack } from '../model/FeedBack';
import { Plat } from '../model/plat';
import { FeedbackService } from '../shared/feedback.service';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.css']
})
export class ListFeedbackComponent implements OnInit {

  plats: Plat[] = [];
  plat: Plat = new Plat();
  listfeedbacks: any = [];
  feedbackgroup: FormGroup;
  feedback: FeedBack = new FeedBack();
  badcolor = "#842053";
  moycolor = "#204484";
  goodcolor = "green";

  
  constructor(private fs: FeedbackService, private router: Router,private ps:PlatService) { }

  ngOnInit(): void {
    this.fs.getFeedbackss().subscribe((data: FeedBack[]) => {
      this.listfeedbacks = data
  }, (err) => {
      console.log(err);
  }
  );
  }
  delete(id)
  {
    this.fs.feedbackdelete(id).subscribe(
      res => {
        alert("Votre feedback est supprimé");
        this.router.navigateByUrl('/listefeedbacks');
      }
    );
  }
 
}
