import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import *  as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[DataService]
})
export class AppComponent implements OnInit{
  title = 'user-app';
  showUsers : boolean = true;

  constructor(private dataService : DataService){

  }

  onIncrement(){
    this.dataService.counter++;
  }
  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyC6Y3eivH6Rceq_LtrMamSwDcrwuLyOtSY",
      authDomain: "angular-js-6c651.firebaseapp.com"
    })
  }
}
