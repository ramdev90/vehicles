import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-ride',
  templateUrl: './find-ride.component.html',
  styleUrls: ['./find-ride.component.css'],
})
export class FindRideComponent implements OnInit {
  lat:number = 51.678418;
  lng:number = 7.809007;

  constructor() {}

  ngOnInit(): void {}
  onChoseLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }
}
