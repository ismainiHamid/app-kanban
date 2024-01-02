import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App kanban';

  constructor(private _router: Router ) {}

  get currentUrl() {
    console.log(this._router.url);
    return this._router.url;
  }
}
