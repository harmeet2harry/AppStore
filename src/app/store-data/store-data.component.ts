import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-store-data',
  templateUrl: './store-data.component.html',
  styleUrls: ['./store-data.component.scss']
})
export class StoreDataComponent implements OnInit {
  data: any;
  constructor() {
    this.data =[];
   }

  ngOnInit() {
  }
  submitForm( form) {
    console.log(form);
    this.data.push(form);
  }

}
