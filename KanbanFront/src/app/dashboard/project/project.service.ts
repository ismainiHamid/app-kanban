import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Project} from "./project.component";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private uri: string = "/api/project-manage/projects";

  constructor(private httpClient: HttpClient) {
  }

  public save(project: Project) {
    return this.httpClient.post(this.uri, project);
  }

  public update(project: Project) {
    return this.httpClient.put(this.uri, project);
  }

  public delete(project: Project) {
    return this.httpClient.delete(`${this.uri}/${project.id}`);
  }

  public findAll() {
    return this.httpClient.get<Project[]>(this.uri);
  }

  public findById(id: string) {
    return this.httpClient.get<Project>(`${this.uri}/${id}`);
  }
}
