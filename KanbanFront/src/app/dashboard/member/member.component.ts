import {Component, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";
import {ProjectService} from "../project/project.service";
import {MemberService} from "./member.service";
import {Member} from "./member";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Project} from "../project/project.component";
import {User} from "../user/user.component";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  public addMember: boolean = true;
  public member: Member;
  public members: Member[] = [];
  public users: User[] = [];
  public projects: Project[] = [];

  constructor(private userService: UserService, private projectService: ProjectService,
              private memberService: MemberService, private router: Router) {
    this.member = new Member();
  }

  public ngOnInit() {
    this.findAll();
    this.findAllUser();
    this.findAllProject();
  }

  public save(form: NgForm) {
    this.memberService.save(this.member).subscribe(result => {
      this.gotoMemberList();
      this.findAll();
      form.resetForm();
      this.addMember = true;
    });
  }

  public findAll() {
    this.memberService.findAll().subscribe(data => {
      this.members = data;
    }, error => {
      console.log("Fetching error: " + error);
    });
  }


  public findAllUser() {
    this.userService.findAll().subscribe(result => {
        this.users = result;
      },
      error => {
        console.log('Fetching error: ' + error);
      });
  }

  public findAllProject() {
    this.projectService.findAll().subscribe(result => {
        this.projects = result;
      },
      error => {
        console.log('Fetching error: ' + error);
      });
  }

  public gotoMemberList() {
    this.router.navigate(['/members']);
  }

  public showForm() {
    this.addMember = !this.addMember;
  }
}
