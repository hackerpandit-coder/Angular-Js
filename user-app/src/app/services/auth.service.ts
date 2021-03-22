import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  registerUser(email : string, passwword : string){
    firebase.default
    .auth()
    .createUserWithEmailAndPassword(email,passwword)
    .then((response) => console.log(response))
    .catch(err => console.log("[FIREBASE RESPONSE]", err))
  }

  loginUser(email : string, passwword : string){
firebase.default
.auth()
.signInWithEmailAndPassword(email,passwword)
.then((response) => {
  firebase.default.auth().currentUser.getIdToken()
  .then(token => console.log(token))
  .catch(err => console.log(err))
})
.catch()
  }
}
