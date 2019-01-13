import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  data : any;
  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('https://udemy-http-75781.firebaseio.com/recipes.json').subscribe(
      data => {
        this.data = data;
      }
    )
  }

}
