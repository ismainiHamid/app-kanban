import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {SignInComponent} from "./login/sign-in/sign-in.component";
import {ClientComponent} from "./dashboard/client/client.component";
import {ProjectComponent} from "./dashboard/project/project.component";
import {TicketComponent} from "./dashboard/ticket/ticket.component";
import {UserComponent} from "./dashboard/user/user.component";
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./dashboard/main/main.component";
import {HelpComponent} from "./dashboard/help/help.component";

const routes: Routes = [
  {path: '', redirectTo: '/login/sign-in', pathMatch: 'full'},
  {
    path: 'login',
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
    ],
    component: LoginComponent,
  },

  {
    path: 'dashboard',
    children: [
      {path: 'main', component: MainComponent},
      {path: 'clients', component: ClientComponent},
      {path: 'projects', component: ProjectComponent},
      {path: 'members', component: ProjectComponent},
      {path: 'tickets', component: TicketComponent},
      {path: 'users', component: UserComponent},
      {path: 'help', component: HelpComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
