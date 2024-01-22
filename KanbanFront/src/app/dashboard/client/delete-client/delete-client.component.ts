import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client, ClientComponent} from "../client.component";

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.css']
})
export class DeleteClientComponent implements OnInit {
  @Input()
  public clientId?: any;
  public client: Client;

  constructor(private clientService: ClientService, private clientComponent: ClientComponent) {
    this.client = new Client();
  }

  public ngOnInit(): void {
    this.findById(this.clientId);
  }

  public delete() {
    this.clientService.delete(this.client).subscribe(result => {
      this.clientComponent.findAll();
      this.clientComponent.operationDelete = true;
      this.clientComponent.hiddenAlertDelete();
    });
  }

  public findById(id: string) {
    this.clientService.findById(id).subscribe(result => {
      this.client = result;
    });
  }
}
