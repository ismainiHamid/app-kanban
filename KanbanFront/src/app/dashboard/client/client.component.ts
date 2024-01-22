import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ClientService} from "./client.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

export class Client {
  id?: string;
  name?: string;
  country?: string;
  budget?: number;
  createdAt?: Date;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['name', 'country', 'budget', 'createdAt', 'actions'];
  public dataSource = new MatTableDataSource<Client>();
  public clients: Client[] = [];
  public operationSave: boolean = false;
  public operationUpdate: boolean = false;
  public operationDelete: boolean = false;


  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  constructor(private clientService: ClientService) {
  }

  public ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  public ngOnInit(): void {
    this.findAll();
  }

  public findAll() {
    this.clientService.findAll().subscribe(data => {
      this.clients = data;

      this.clients.sort((a: Client, b: Client) => {
        // @ts-ignore
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      this.dataSource = new MatTableDataSource<Client>(this.clients);
      // @ts-ignore
      this.dataSource.paginator = this.paginator;
      // @ts-ignore
      this.dataSource.sort = this.sort;
    });
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public hiddenAlertSave() {
    let alert = document.getElementById('alertSave');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }

  public hiddenAlertUpdate() {
    let alert = document.getElementById('alertUpdate');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }

  public hiddenAlertDelete() {
    let alert = document.getElementById('alertDelete');
    // @ts-ignore
    alert.style.display = 'block';
    setTimeout(() => {
      // @ts-ignore
      alert.style.display = 'none';
    }, 5000);
  }
}
