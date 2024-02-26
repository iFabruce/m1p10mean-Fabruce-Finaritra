import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageappointmentComponent } from './manageappointment.component';

describe('ManageappointmentComponent', () => {
  let component: ManageappointmentComponent;
  let fixture: ComponentFixture<ManageappointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageappointmentComponent]
    });
    fixture = TestBed.createComponent(ManageappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
