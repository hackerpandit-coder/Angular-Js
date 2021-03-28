import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string = null;

  constructor(private router : Router) { }

  registerUser(email : string, passwword : string){
    firebase.default
    .auth()
    .createUserWithEmailAndPassword(email,passwword)
    .then((response) => console.log(response))
    .catch(err => console.log("[FIREBASE RESPONSE]", err))
  }

  loginUser(email : string, password : string) {
    firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        // console.log("SUCCESS", response);
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            // console.log("TOKEN", token);
            this.token = token;
            this.router.navigate(["users"]);
          })
          .catch(err=>console.log(err));
      })
      .catch(err => console.log(err))
  }


  getToken() : string{
    return this.token;
  }

  isAuthenticated() : boolean{
    console.log("Inside isAuthenticated()..........................", this.token);
    return this.token != null;
  }

  logout(){
    firebase.default.auth().signOut().then(res => {
      console.log("[LOGOUT SUSSESS]");
      this.token = null;
      this.router.navigate(["/login"]);
    })
    .catch(err => console.log(err))
  }
}
