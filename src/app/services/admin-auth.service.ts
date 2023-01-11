import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  private isLoggedIn : BehaviorSubject<boolean>

  constructor() {
    this.isLoggedIn = new BehaviorSubject<boolean> (this.isLogged())
   }

  

login(username : string , password: string){

  let userToken = "123456";
  localStorage.setItem("token" , userToken)
  this.isLoggedIn.next(true)
}

logout(){
localStorage.removeItem("token")
this.isLoggedIn.next(false)
}

isLogged () : boolean {
  return (localStorage.getItem("token")) ? true : false
}

status() : Observable<boolean>{
  return this.isLoggedIn.asObservable()
}
}
