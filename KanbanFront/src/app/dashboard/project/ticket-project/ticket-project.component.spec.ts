import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketProjectComponent } from './ticket-project.component';

describe('TicketProjectComponent', () => {
  let component: TicketProjectComponent;
  let fixture: ComponentFixture<TicketProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketProjectComponent]
    });
    fixture = TestBed.createComponent(TicketProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
