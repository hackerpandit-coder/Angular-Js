import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() user : User;

  myDynamicClass = {'my-border' : true, 'features' : false}
  myDynamicStyle = { border : '2px red solid' }

  onToggle(){
    this.myDynamicClass['my-border']=!this.myDynamicClass['my-border'];
    this.myDynamicClass['features']=!this.myDynamicClass['features'];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
