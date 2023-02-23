import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookFlightComponent } from './book-flight/book-flight.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { UserComponent } from './user/user.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';


const allLinks:Routes=[
  {path:'registerFlight',component:AddFlightComponent},
  {path:'view',component:AllFlightsComponent},
  {path:'add-flight',component:AddFlightComponent},
  {path:'book-flight',component:BookFlightComponent},
  {path:'all-flights',component:AllFlightsComponent},
  {path:'flight-details',component:FlightDetailsComponent},
  
  {path:'my-bookings',component:MyBookingsComponent},
  {path:'about-us',component:AboutUsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookFlightComponent,
   
    AboutUsComponent,
    UserComponent,
    FlightReviewComponent,
    FlightDetailsComponent,
   
    AddFlightComponent,
    AllFlightsComponent,
    MyBookingsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
