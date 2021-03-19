import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  getUsers(){
    return USER_DATA;
  }

  constructor(public httpClient : HttpClient){}

  getUserFronJson(){
   return this.httpClient.get('./assets/data/user-data.json');
  }

}
