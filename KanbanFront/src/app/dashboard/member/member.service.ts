import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "./member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  public uri: string = '/api/project-manage/project-members';

  constructor(private httpClient: HttpClient) {}

  public save(member: Member) {
    return this.httpClient.post(this.uri, member);
  }

  public findAll() {
    return this.httpClient.get<Member[]>(this.uri);
  }
}
