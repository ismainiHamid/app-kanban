import {Component, OnInit} from '@angular/core';
import {ClientService} from "../client.service";
import {FormControl, FormGroup, FormGroupDirective} from "@angular/forms";
import {Client, ClientComponent} from "../client.component";

export class Country {
  name?: string;
  nameAr?: string;
}

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.css']
})
export class SaveClientComponent implements OnInit {
  public countries: Country[] = [];
  public formClient: any;

  constructor(private clientService: ClientService, private clientComponent: ClientComponent) {
  }

  public ngOnInit(): void {
    this.findAllCountries();

    this.formClient = new FormGroup({
      name: new FormControl(''),
      country: new FormControl(''),
      budget: new FormControl(''),
    });
  }

  public save(ngForm: FormGroupDirective) {
    const client: Client = {
      name: this.formClient.get('name').value,
      country: this.formClient.get('country').value,
      budget: this.formClient.get('budget').value,
    }
    this.clientService.save(client).subscribe(result => {
      this.clientComponent.findAll();
      ngForm.reset();
      this.clientComponent.operationSave = true;
      this.clientComponent.hiddenAlertSave();
    });
  }

  public findAllCountries() {
    this.clientService.findAllCountries().subscribe(data => {
      this.countries = data;
    });
  }
}
