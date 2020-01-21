import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.scss']
})
export class ContacteditComponent implements OnInit {

  contact;
  constructor(public userService:UserService,private router:Router) { 
    this.contact= JSON.parse(localStorage.getItem('editContact'));
  }

  ngOnInit() {
  }

  editSubmit(contactForm : NgForm){
    let userDetails=JSON.parse(localStorage.getItem('userDetails'));
    let contacts= JSON.parse(
      localStorage.getItem('contactDetails'+userDetails.id)
    );
    for(let contact in contacts){
      if(contacts[contact].id === this.contact.id){
        contacts[contact].fname = contactForm.value.fname,
        contacts[contact].contactno = contactForm.value.contactno
      }
    }
    localStorage.setItem(
      'contactDetails'+userDetails.id,
      JSON.stringify(contacts)
    );
    contactForm.reset();
    this.router.navigate(['/contact-list']);
  }
  cancel(){
    this.router.navigate(['/contact-list']);
  }

}
