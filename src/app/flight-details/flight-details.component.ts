import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../flight';
import { FlightOperationsService } from '../flight-operations.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent {
  
  __flightService:FlightOperationsService;
  router:Router;
  activeRoute:ActivatedRoute;
  f:Flight = new Flight(0,'','','',0,0,0,'','');

  constructor(flightService:FlightOperationsService, router:Router, activeRoute:ActivatedRoute)
  {
    this.__flightService = flightService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchFlightByCarrier = this.activeRoute.snapshot.params['cid']; //extract value from prameter(URI)
    console.log(searchFlightByCarrier);
    //this.f =this.__flightService.getFlightsByCarrier(searchFlightByCarrier);
    console.log(this.f);
  }

}
