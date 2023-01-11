import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interface/iproduct';
import { IUser } from 'src/app/interface/iuser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userData: any[] = [];
  users: any[] = [];
  finalUser:any[]=[];
  constructor() {
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
}



