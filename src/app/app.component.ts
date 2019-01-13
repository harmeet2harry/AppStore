import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTab } from '@angular/material';
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };
const config = {
  apiKey: "AIzaSyDtg-s33T-IFgcYJh6J431wCvJp7iCH-ic",
  authDomain: "udemy-http-75781.firebaseapp.com",
  databaseURL: "https://udemy-http-75781.firebaseio.com",
  projectId: "udemy-http-75781",
  storageBucket: "udemy-http-75781.appspot.com",
  messagingSenderId: "339497162142"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'InfoStore';

  ngOnInit() {
    firebase.initializeApp(config);
    firebase.firestore().settings(settings);
  }
}
