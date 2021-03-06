import { Component, OnInit, Input,
   DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit,
    AfterViewChecked, OnDestroy,SimpleChanges } from '@angular/core';
import { User } from '../model/user';
import { USER_DATA } from '../data/mocks';
import { DataService } from '../services/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  //providers:[DataService]
})
export class UsersComponent implements OnInit
// OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy 
{

  @Input() title: string;

  users : User[];

  ngOnInit(): void {
   // this.users = USER_DATA;
   //this.users = this.dataService.getUsers();
   //this.dataService.getUserFronJson().subscribe(response => this.users = <User[]> response['userdata'])
   this.dataService.getUsersFromApi()
      .subscribe(
        (data : User[]) => {
          this.users = data;
        },
        err => console.log(err),
        () => {console.log("[COMPLETED]")}
      )

      //this.dataService.createUser();

  }

  onDecrement(){
    this.dataService.counter--;
  }

  onMoreInfo(user : User){
    alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
  }

  constructor(public dataService : DataService) { }

  

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges", changes);
  // }
  // ngDoCheck() { console.log("ngDoCheck") }
  // ngAfterContentInit() { console.log("ngAfterContentInit") }
  // ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  // ngAfterViewInit() { console.log("ngAfterViewInit") }
  // ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  // ngOnDestroy() { console.log("ngOnDestroy") }

}
