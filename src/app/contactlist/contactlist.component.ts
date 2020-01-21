import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  userDetails;
  contacts:Array<any> = [];
  contactDetails;
  constructor(public userService:UserService,private router:Router) { 
  }

  ngOnInit() {
    this.userDetails=JSON.parse(localStorage.getItem('userDetails'));
    if(this.userDetails){
      this.contacts= JSON.parse(
        localStorage.getItem('contactDetails'+this.userDetails.id)
      );
    }else{
      this.router.navigate(['']);
    }
    
    
    
                 
  }
  addContact(contact:NgForm){
    if(this.contacts === null){
      this.contacts = [];
    }
    console.log(contact.value.fname);
    console.log(this.userDetails);
    let count = 0;
    if(this.contacts.length>0){
      count = this.contacts[this.contacts.length-1].id;
    }
    count++;
    this.contacts.push({id : count, fname:contact.value.fname,contactno:contact.value.contactno});
  
    localStorage.setItem(
      'contactDetails'+this.userDetails.id,
      JSON.stringify(this.contacts)
    );
    contact.reset();   
  }
  editContact(contact){
    localStorage.setItem('editContact',JSON.stringify(contact));

    this.router.navigate(['/contact-edit']);
  }

  deleteContact(id){
    let index = this.contacts.indexOf(id);
    this.contacts.splice(index,1);
    localStorage.setItem(
      'contactDetails'+this.userDetails.id,
      JSON.stringify(this.contacts)
    );
  }

  logout(){
    this.router.navigate(['']);
  }

}
