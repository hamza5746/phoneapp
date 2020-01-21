import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [
    {
      id:1,
      name:'Hamza',
      email:'hamza_hanif77@hotmail.com',
      password:'12345678'
    },
    {
      id:2,
      name:'Fazal',
      email:'fazal.mahmood@ignitelabs.co',
      password:'87654321'
    },
  ];
  userDetails;
  editDetails;
  constructor() { 

  }

  setUser(userEmail,userPassword){
    for(let user in this.users){
      if(this.users[user].email === userEmail &&
         this.users[user].password === userPassword){
          this.userDetails = this.users[user];
      }
    }
  }

  getUser(){
    return this.userDetails;
  }
}
