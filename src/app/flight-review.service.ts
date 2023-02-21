import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightReview } from './flight-review';
import { FlightReviewDTO } from './flight-review-dto';

@Injectable({
  providedIn: 'root'
})
export class FlightReviewService {
  
  baseURL:string = 'http://localhost:9090';
  submitReviewEndPoint:string=this.baseURL+'/app/review';
  ReviewByFlightIdEndPoint:string=this.baseURL+'/app/by';
  //localhost:9090/app/by/11
  
  

  constructor(private http:HttpClient) {
    

   }

   getReviewByFlightId(flightId:number):Observable<FlightReviewDTO[]>{
    console.log("inside method 1" +this.ReviewByFlightIdEndPoint);
    this.ReviewByFlightIdEndPoint= this.ReviewByFlightIdEndPoint+'/'+flightId;
    console.log("after getting review 2"+ this.ReviewByFlightIdEndPoint);

    return this.http.get<FlightReviewDTO[]>(`${this.ReviewByFlightIdEndPoint}`);
   }


   getRatingsByFlightId(filterReviewbyrating:number):FlightReview[]
   {
    return[];
   }
   submitFlightReview(flightReview: FlightReview):Observable<FlightReview> {

    console.log("inside method 1 : Review added" +flightReview);
    
    return this.http.post<FlightReview>(`${this.submitReviewEndPoint}`,flightReview);
    
  }

}
