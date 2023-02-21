import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewScheduledFlightComponent } from './view-scheduled-flight/view-scheduled-flight.component';

import { HistoryComponent } from './history/history.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserComponent } from './user/user.component';
import { FlightReviewComponent } from './flight-review/flight-review.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const allLinks:Routes=[
  {path:'book-flight',component:BookFlightComponent},
  {path:'view-scheduled-flight',component:ViewScheduledFlightComponent},
  {path:'flight-details',component:FlightDetailsComponent},
  {path:'history',component:HistoryComponent},
  {path:'about-us',component:AboutUsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookFlightComponent,
    ViewScheduledFlightComponent,
    HistoryComponent,
    AboutUsComponent,
    UserComponent,
    FlightReviewComponent,
    FlightDetailsComponent
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
