import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class DataService {

  counter : number = 0;

  private BASE_URL : string = "https://angular-js-6c651-default-rtdb.firebaseio.com/userdata.json";


  getUsersFromApi(){
    return this.httpClient.get<User[]>(this.BASE_URL);
    
  }

  createUser(){
    const body = {firstName : "Virendra", lastName : "Mishra", age : 25};
    this.httpClient.post(this.BASE_URL, body)
    .subscribe((data) => {
      console.log("[POST DATA]", data)
    })
  }

  getUsers(){
    return USER_DATA;
  }

  constructor(public httpClient : HttpClient){}

  getUserFronJson(){
   return this.httpClient.get('./assets/data/user-data.json');
  }

}
