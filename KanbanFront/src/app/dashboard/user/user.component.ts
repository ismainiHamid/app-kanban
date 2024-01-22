import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {Router} from "@angular/router";

export class User {
  id?: string;
  fullName?: string;
  phoneNumber?: string;
  username?: string;
  password?: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public addUser: boolean = true;
  public users: User[] = [];
  public user: User;


  constructor(private userService: UserService, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.findAll();
  }

  public findAll() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}
