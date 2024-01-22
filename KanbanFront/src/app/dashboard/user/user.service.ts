import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public uri: string = "/api/profiling-manage/users";

  constructor(private httpClient: HttpClient) {
  }

  public save(user: User) {
    return this.httpClient.post(this.uri, user);
  }

  public update(user: User) {
    return this.httpClient.put(this.uri, user);
  }

  public delete(user: User) {
    return this.httpClient.delete(`${this.uri}/${user.id}`);
  }

  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.uri);
  }

  public findByUsername(username: any) {
    return this.httpClient.get(`${this.uri}/${username}`);
  }
}
