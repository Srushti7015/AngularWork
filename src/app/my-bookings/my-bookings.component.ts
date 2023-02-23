import { Component } from '@angular/core';
import { BookFlightService } from '../book-flight.service';
import { BookingDto } from '../booking-dto';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css']
})
export class MyBookingsComponent {
  allBooking:BookingDto[]=[];

  constructor(private bookingService:BookFlightService)
  {

    console.log("All Bookings")
    bookingService.getAllBookingFromSpring().subscribe(
      data=>{
        this.allBooking=data;
      },
      err=>{
        console.log("Error"+err);
      }
    );
  }

  getBooking(destinationAirport:string){
    this.bookingService.getBookingByDestinationAirport(destinationAirport).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

  getBooking1(dateOfBooking:string){
    this.bookingService.getBookingByDate(dateOfBooking).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }
  getBooking2(timeOfBooking:string){
    this.bookingService.getBookingByTime(timeOfBooking).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allBooking = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

}
