import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { AuthService } from './auth.service';

@Injectable()
export class DataService {

  counter : number = 0;

  private BASE_URL : string = "https://angular-js-6c651-default-rtdb.firebaseio.com/userdata.json";

  constructor(public httpClient : HttpClient, private authService : AuthService){}

  getUsersFromApi(){
    return this.httpClient.get<User[]>(`${this.BASE_URL}?auth=${this.authService.getToken()}`);
    
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

  

  getUserFronJson(){
   return this.httpClient.get('./assets/data/user-data.json');
  }

}
