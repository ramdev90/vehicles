import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from '../app/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './shared/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './shared/auth-guard.service';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { Sweetalert2Component } from './shared/sweetalert2/sweetalert2.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { DHomeComponent } from './dashboard2/d-home/d-home.component';
import { PhoneComponent } from './register/phone/phone.component';
import { DobComponent } from './register/dob/dob.component';
import { GenderComponent } from './register/gender/gender.component';
import { FindRideComponent } from './find-ride/find-ride.component';
import { OfferRideComponent } from './offer-ride/offer-ride.component';
// import { AgmCoreModule } from '@agm/core';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SlideshowComponent,
    Sweetalert2Component,
    FooterComponent,
    DashboardComponent,
    Dashboard2Component,
    DHomeComponent,
    PhoneComponent,
    DobComponent,
    GenderComponent,
    FindRideComponent,
    OfferRideComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyA6ZLUwqvfWqkDZHHxD3GC9woNnGTa4iqo',
    // }),

    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDMsOPXkUPZsKspIM4XfBmHQdGoXhyCmlo'
    // })
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
