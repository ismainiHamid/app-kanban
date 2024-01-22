import {Component, OnInit} from '@angular/core';
import {UserService} from "../../dashboard/user/user.service";
import {NgForm} from "@angular/forms";
import {User} from "../../dashboard/user/user.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public show: boolean = false;
  public showConfirm: boolean = false
  public user: User;
  public userFindByUsername?: User;
  public errorMessage: boolean = true;

  constructor(private userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {

  }

  public save(form: NgForm) {
    this.findByUsername(this.user);
    if (this.userFindByUsername !== undefined) {
      this.userService.save(this.user).subscribe(result => {
        form.resetForm();
        this.errorMessage = true;
      });
    } else this.errorMessage = false;
  }

  public findByUsername(username: User) {
    this.userService.findByUsername(username.username).subscribe(result => {
      this.userFindByUsername = result;
    });
  }


  public inputPassword() {
    this.show = !this.show;
  }

  public inputConfirmPassword() {
    this.showConfirm = !this.showConfirm;
  }
}
