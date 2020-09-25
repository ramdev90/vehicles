import { OfferRideComponent } from './offer-ride/offer-ride.component';
import { FindRideComponent } from './find-ride/find-ride.component';
import { GenderComponent } from './register/gender/gender.component';
import { DobComponent } from './register/dob/dob.component';
import { PhoneComponent } from './register/phone/phone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { HomeComponent } from './home/home.component';
import { DHomeComponent } from './dashboard2/d-home/d-home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'find-ride', component: FindRideComponent },
  { path: 'offer-ride', component: OfferRideComponent },
  {
    path: 'dashboard2',
    component: Dashboard2Component,
    children: [
      { path: 'd-home', component: DHomeComponent },
      {
        path: 'profile',
        component: ProfileComponent , canActivate: [AuthGuardService]
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      { path: 'phone', component: PhoneComponent },
      { path: 'dob', component: DobComponent },
      { path: 'gender', component: GenderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
