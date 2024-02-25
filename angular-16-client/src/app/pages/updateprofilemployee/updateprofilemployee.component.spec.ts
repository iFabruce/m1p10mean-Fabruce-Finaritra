import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofilemployeeComponent } from './updateprofilemployee.component';

describe('UpdateprofilemployeeComponent', () => {
  let component: UpdateprofilemployeeComponent;
  let fixture: ComponentFixture<UpdateprofilemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateprofilemployeeComponent]
    });
    fixture = TestBed.createComponent(UpdateprofilemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
