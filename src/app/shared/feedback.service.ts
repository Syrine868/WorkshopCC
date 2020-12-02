import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedBack } from '../model/FeedBack';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  fUrl = "http://localhost:3000/Feedback"
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  ajoutercommentairePlatF(f: FeedBack): Observable<FeedBack> {
    return this.http.post<FeedBack>(this.fUrl, f, this.httpOptions);
  }
  getFeedbackss(): Observable<FeedBack[]> {
    return this.http.get<FeedBack[]>(this.fUrl);
  }
  updateFeedbacks(id: number, plat: FeedBack): Observable<FeedBack>{
    return this.http.put<FeedBack>(this.fUrl+ '/' + id , plat , this.httpOptions);
  }
  
}
