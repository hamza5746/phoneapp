import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit() {
    let loggin =localStorage.getItem('isLoggedIn'); 
    if(loggin != "true"){

    }
  }
  loginUser(data:NgForm) {
    let email = data.value.email;
    let password = data.value.password;
    
    this.userService.setUser(email,password);
    let user = this.userService.getUser();
    if(user){
      localStorage.setItem('isLoggedIn','true');
      localStorage.setItem('userDetails',JSON.stringify(user));
      
      this.router.navigate(['/contact-list']);
    }else{
      alert("Email or Password is incorrect");
    }
  }

}
