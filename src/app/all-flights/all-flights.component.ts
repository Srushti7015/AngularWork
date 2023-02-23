import { Component } from '@angular/core';

import { FlightDTO } from '../flight-dto';
import { FlightOperationsService } from '../flight-operations.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent {
  allFlights:FlightDTO[]=[];

  constructor(private flightService:FlightOperationsService)
  {
    console.log("All Flight List")
    flightService.getAllFlightFromSpring().subscribe(
      data=>{
        this.allFlights=data;
      },
      err=>{
        console.log("Error "+err);
      }
    );

}
  getFlightByCarrier(carrierName:string){
    this.flightService.getFlightByCarrierName(carrierName).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allFlights = data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
  }

    getFlightBySource(sourceAirport:string){
      this.flightService.getFlightBySourceAirport(sourceAirport).subscribe(
        data=>{
          console.log("data :- "+data);
          
          this.allFlights = data;
        },err=>{
          console.log("error from spring ",err);
    
        } 
      );
  }
  getFlightByDestination(destinationAirport:string){
    this.flightService.getFlightByDestinationAirport(destinationAirport).subscribe(
      data=>{
        console.log("data :- "+data);
        
        this.allFlights= data;
      },err=>{
        console.log("error from spring ",err);
  
      } 
    );
}
  

}
