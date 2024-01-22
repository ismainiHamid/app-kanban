import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignInComponent} from './login/sign-in/sign-in.component';
import {SignUpComponent} from './login/sign-up/sign-up.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ClientComponent} from './dashboard/client/client.component';
import {ProjectComponent} from './dashboard/project/project.component';
import {MemberComponent} from './dashboard/member/member.component';
import {TicketComponent} from './dashboard/ticket/ticket.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserComponent} from "./dashboard/user/user.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './dashboard/main/main.component';
import {HelpComponent} from './dashboard/help/help.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CdkDropList} from "@angular/cdk/drag-drop";
import {CommonModule} from "@angular/common";
import {GridModule, PagerModule} from '@syncfusion/ej2-angular-grids';
import {KanbanModule} from '@syncfusion/ej2-angular-kanban';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonModule} from "@angular/material/button";
import {SaveClientComponent} from './dashboard/client/save-client/save-client.component';
import {DeleteClientComponent} from './dashboard/client/delete-client/delete-client.component';
import {UpdateClientComponent} from './dashboard/client/update-client/update-client.component';
import {MatInputModule} from "@angular/material/input";
import { UpdateProjectComponent } from './dashboard/project/update-project/update-project.component';
import { SaveProjectComponent } from './dashboard/project/save-project/save-project.component';
import { DeleteProjectComponent } from './dashboard/project/delete-project/delete-project.component';
import { TicketProjectComponent } from './dashboard/project/ticket-project/ticket-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ClientComponent,
    ProjectComponent,
    MemberComponent,
    TicketComponent,
    UserComponent,
    MainComponent,
    HelpComponent,
    SaveClientComponent,
    DeleteClientComponent,
    UpdateClientComponent,
    UpdateProjectComponent,
    SaveProjectComponent,
    DeleteProjectComponent,
    TicketProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    CdkDropList,
    GridModule,
    PagerModule,
    KanbanModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
