import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from "@angular/forms";
import {ProjectService} from "../project.service";
import {Project, ProjectComponent} from "../project.component";
import {Client} from "../../client/client.component";
import {ClientService} from "../../client/client.service";

@Component({
  selector: 'app-save-project',
  templateUrl: './save-project.component.html',
  styleUrls: ['./save-project.component.css']
})
export class SaveProjectComponent implements OnInit {
  public clients: Client[] = [];
  public formProject: any;

  constructor(private projectService: ProjectService, private projectComponent: ProjectComponent, private clientService: ClientService) {
  }

  public ngOnInit(): void {
    this.clientService.findAll().subscribe(data => {
      this.clients = data;
    });

    this.formProject = new FormGroup({
      name: new FormControl(''),
      cost: new FormControl(''),
      startDate: new FormControl(''),
      client: new FormControl(''),
    });
  }

  public save(ngForm: FormGroupDirective) {
    const project: Project = {
      name: this.formProject.get('name').value,
      cost: this.formProject.get('cost').value,
      startDate: this.formProject.get('startDate').value,
      client: this.formProject.get('client').value,
    }

    this.projectService.save(project).subscribe(result => {
      this.projectComponent.findAll();
      ngForm.resetForm();
      this.projectComponent.operationSave = true;
      this.projectComponent.hiddenAlertSave();
    });
  }
}
