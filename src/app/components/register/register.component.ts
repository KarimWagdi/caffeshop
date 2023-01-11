import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  
  //new
  @ViewChild("regiForm") regiForm!: ElementRef;

  @ViewChild("newUserName") newUserName!: ElementRef
  @ViewChild("newUserRoom") newUserRoom!: ElementRef
  @ViewChild("newuUserEmail") newuUserEmail!: ElementRef
  @ViewChild("newUserPassword") newUserPassword!: ElementRef
  @ViewChild("userNewImg") userNewImg!: ElementRef

  
//toLogin
  @ViewChild("loginForm") loginForm!: ElementRef;

  @ViewChild("userName") userName!: ElementRef
  @ViewChild("userPassword") userPassword!: ElementRef;
  username: string = "";
  userpassword: string = "";
  userlogin: any[] = [];
  userRegister:any=""
  userData: any[] = [];
  base64: any = ""
  imgUrl:any =""



  constructor( private build:FormBuilder) {

  }

  ngOnInit(): void {

    if (localStorage.getItem("usersData") == null) {
      localStorage.setItem("usersData", "[]")
    }
  }

  createAccount() {
    

    this.userRegister = {
      "name": this.newUserName.nativeElement.value,
      "room": this.newUserRoom.nativeElement.value,
      "email": this.newuUserEmail.nativeElement.value,
      "password": this.newUserPassword.nativeElement.value,
      "imgURL":this.imgUrl
    }

    this.userData = JSON.parse(localStorage.getItem("usersData")!)
    this.userData.push(this.userRegister)
    localStorage.setItem("usersData", JSON.stringify(this.userData))

  }
  getImgPath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.imgUrl = this.base64
    }
  }

  


  login(){

  }
  registration(){
    this.loginForm.nativeElement.style.display="none"

  }
  logout() {

  }
  backtoLogin(){

  }
}
