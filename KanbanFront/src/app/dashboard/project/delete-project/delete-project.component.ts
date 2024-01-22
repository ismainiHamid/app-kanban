import {Component, Input, OnInit} from '@angular/core';
import {Project, ProjectComponent} from "../project.component";
import {ProjectService} from "../project.service";

@Component({
  selector: 'app-delete-project',
  templateUrl: './delete-project.component.html',
  styleUrls: ['./delete-project.component.css']
})
export class DeleteProjectComponent implements OnInit {
  @Input()
  public projectId?: any;
  public project: Project;

  constructor(private projectService: ProjectService, private projectComponent: ProjectComponent) {
    this.project = new Project();
  }

  public ngOnInit(): void {
    this.findById(this.projectId);
  }

  public delete() {
    this.projectService.delete(this.project).subscribe(result => {
      this.projectComponent.findAll();
      this.projectComponent.operationDelete = true;
      this.projectComponent.hiddenAlertDelete();
    });
  }

  public findById(id: string) {
    this.projectService.findById(id).subscribe(result => {
      this.project = result;
    });
  }
}
