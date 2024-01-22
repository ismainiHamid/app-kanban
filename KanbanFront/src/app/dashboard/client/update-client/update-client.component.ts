import {Component, Input, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {Client, ClientComponent} from "../client.component";
import {NgForm} from "@angular/forms";
import {Country} from "../save-client/save-client.component";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  @Input()
  public clientId?: any;
  public client: Client;
  public countries: Country[] = [];

  constructor(private clientService: ClientService, private clientComponent: ClientComponent) {
    this.client = new Client();
  }

  public ngOnInit(): void {
    this.findAllCountries();
    this.findById(this.clientId);
  }

  public update(ngForm: NgForm) {
    this.clientService.update(this.client).subscribe(result => {
      this.clientComponent.findAll();
      ngForm.resetForm();
      this.clientComponent.operationUpdate = true;
      this.clientComponent.hiddenAlertUpdate();
    });
  }

  public findById(id: string) {
    this.clientService.findById(id).subscribe(result => {
      this.client = result;
    });
  }

  public findAllCountries() {
    this.clientService.findAllCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
