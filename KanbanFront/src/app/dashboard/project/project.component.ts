import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from "./project.service";
import {Client} from "../client/client.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {UserService} from "../user/user.service";
import {User} from "../user/user.component";
import {MemberService} from "./member.service";
import {FormControl, FormGroup, FormGroupDirective, NgForm} from "@angular/forms";

export class Project {
  id?: string;
  name?: string;
  cost?: number;
  startDate?: string;
  client?: Client;
  projectMember?: ProjectMember[];
}

export class ProjectMember {
  id?: string;
  project?: Project;
  user?: User;
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['name', 'cost', 'startDate', 'createdAt', 'projectMember', 'actions'];
  public dataSource = new MatTableDataSource<Project>();
  public projects: Project[] = [];
  public project: Project;
  public projectId?: string;
  public members: ProjectMember[] = [];
  public users: User[] = [];
  public formMember: any;
  public operationSave: boolean = false;
  public operationUpdate: boolean = false;
  public operationDelete: boolean = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private projectService: ProjectService, private userService: UserService, private memberService: MemberService) {
    this.project = new Project();
  }

  public ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  public ngOnInit() {
    this.findAll();
    this.findAllUsers();
    this.findMemberByProject(this.projectId);
    this.formMember = new FormGroup({
      user: new FormControl(''),
    });
  }

  public saveMemberToProject(project: Project, ngFrom: FormGroupDirective) {
    const member: ProjectMember = {
      project: project,
      user: this.formMember.get('user').value,
    };
    this.memberService.save(member).subscribe(result => {
      this.findAll();
      ngFrom.resetForm();
      this.findMemberByProject(this.projectId);
    });
  }

  public findAll() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;

      this.projects.sort((a: Project, b: Project) => {
        // @ts-ignore
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      this.dataSource = new MatTableDataSource<Client>(this.projects);
      // @ts-ignore
      this.dataSource.paginator = this.paginator;
      // @ts-ignore
      this.dataSource.sort = this.sort;
    });
  }

  public findById(id: string) {
    this.projectService.findById(id).subscribe(result => {
      this.project = result;
    });
  }

  public findAllUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  public findMemberByProject(id: string | undefined) {
    this.memberService.findByProject(id).subscribe(data => {
      this.members = data;
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public hiddenAlertSave() {
    let alert = document.getElementById('alertSave');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }

  public hiddenAlertUpdate() {
    let alert = document.getElementById('alertUpdate');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }

  public hiddenAlertDelete() {
    let alert = document.getElementById('alertDelete');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }
}
