import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ticket-project',
  templateUrl: './ticket-project.component.html',
  styleUrls: ['./ticket-project.component.css']
})
export class TicketProjectComponent {
  @Input()
  public projectId?: any;

}
