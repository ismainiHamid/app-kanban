import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project, ProjectMember} from "./project.component";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public uri: string = '/api/project-manage/project-members';

  constructor(private httpClient: HttpClient) {
  }

  public save(projectMember: ProjectMember) {
    return this.httpClient.post<ProjectMember>(this.uri, projectMember);
  }

  public findByProject(id: string | undefined) {
    return this.httpClient.get<ProjectMember[]>(`${this.uri}/findByProject/${id}`);
  }
}
