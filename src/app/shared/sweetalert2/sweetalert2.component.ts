import { Component, OnInit } from '@angular/core';
// import Sweetalert2Component from '@sweetalert2/ngx-sweetalert2';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweetalert2',
  templateUrl: './sweetalert2.component.html',
  styleUrls: ['./sweetalert2.component.css']
})
export class Sweetalert2Component implements OnInit {

  constructor() { }

  // public modalFireCondition = false;

  // public isSwalVisible = false;

  ngOnInit(): void {
  }

  showModel(){
    Swal.fire('hey user', 'that ?', 'success' );
  }

}
