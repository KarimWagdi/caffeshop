import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  userData: any[] = [];
  users: any[] = [];
  finalUser:any[]=[];

//toLogin
  @ViewChild("userEmail") userEmail!: ElementRef;
  @ViewChild("userPassword") userPassword!: ElementRef

  constructor( private build:FormBuilder) {
    this.userData.push(localStorage.getItem("usersData"))

  }

  ngOnInit(): void {
    for (const user of this.userData) {
      this.users.push(JSON.parse(user));
    }
    for (const user of this.users[0]) {
      this.finalUser.push(user)
       
    }
  }


  login(){
console.log(this.finalUser);

  }

  checkforlogin(){

  }

}
