import {Component, ComponentFactoryResolver} from '@angular/core';
import {Router} from "@angular/router";
import {ProjectComponent} from "./project/project.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private _router: Router) {}

  public get currentUrl() {
    console.log(this._router.url);
    return this._router.url;
  }

  protected readonly ProjectComponent = ProjectComponent;
}
