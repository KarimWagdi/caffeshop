
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { EnvironmentInjector, Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';
// import { Iproduct } from '../interface/iproduct';
// import { IUser } from '../interface/iuser';

// @Injectable({
//   providedIn: 'root'
// })
// export class UsersService {

//   // users : Iproduct [] = []

//   getAllUsers () {

//   constructor(private HttpClient : HttpClient) { 
//     this.httpOption = {
//       Headers : new HttpHeaders({
//         'Content-Type' : "application/json",
//       })
//     }
//   }

//   getAllUsers () : Observable<IUser[]>{
//     return this.HttpClient.get<IUser[]>(`${environment.APIURL}`)
//   }

//   addUser (newUser : IUser) : Observable<IUser>{
//     return this.HttpClient.post<IUser>(`${environment.APIURL}`, JSON.stringify(newUser), )
//   }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../interface/iproduct';
import { IUser } from '../interface/iuser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // users : Iproduct [] = []
  constructor() { }

  getAllUsers () {
  }
}
