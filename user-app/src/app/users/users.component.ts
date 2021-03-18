import { Component, OnInit, Input, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy,SimpleChanges } from '@angular/core';
import { User } from '../model/user';
import { USER_DATA } from '../data/mocks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() title: string;

  user : User;

  onMoreInfo(user : User){
    alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
  }

  constructor() { }

  ngOnInit(): void {
    this.user = USER_DATA;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges", changes);
  }
  ngDoCheck() { console.log("ngDoCheck") }
  ngAfterContentInit() { console.log("ngAfterContentInit") }
  ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  ngAfterViewInit() { console.log("ngAfterViewInit") }
  ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  ngOnDestroy() { console.log("ngOnDestroy") }

}
