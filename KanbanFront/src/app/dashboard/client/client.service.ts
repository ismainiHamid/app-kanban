import {Injectable, Injector} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "./save-client/save-client.component";
import {Client} from "./client.component";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private uri: string = "/api/project-manage/clients";

  constructor(private httpClient: HttpClient) {
  }

  public save(client: Client) {
    return this.httpClient.post(this.uri, client);
  }

  public update(client: Client) {
    return this.httpClient.put(this.uri, client);
  }

  public delete(client: Client) {
    return this.httpClient.delete(`${this.uri}/${client.id}`);
  }

  public findAll(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.uri);
  }

  public findById(id: string) {
    return this.httpClient.get(`${this.uri}/${id}`);
  }

  public findAllCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>("/assets/json/countries.json");
  }
}
