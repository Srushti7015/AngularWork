import { Component } from '@angular/core';
import { BookFlightService } from '../book-flight.service';
import { Booking } from '../booking';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent {
  __bookingService:BookFlightService;

b:Booking = new Booking('','','','','','');

constructor(bookingService:BookFlightService)
{
  this.__bookingService= bookingService;
}

doFormSubmit()
{
  console.log("form submit button clicked")
  console.log(this.b);
  this.__bookingService.Booking(this.b);

 
}

readBooking(name:string,mobileNumber:string,dateOfBooking:string,sourceAirport:string,destinationAirport:string,timeOfBooking:string)
{
  console.log(sourceAirport+" "+destinationAirport);
  let bookingFromUser:Booking = new Booking(name,mobileNumber,dateOfBooking,sourceAirport,destinationAirport,timeOfBooking);
  this.__bookingService.Booking(bookingFromUser);
}

}
