import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemployeComponent } from './addemploye.component';

describe('AddemployeComponent', () => {
  let component: AddemployeComponent;
  let fixture: ComponentFixture<AddemployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddemployeComponent]
    });
    fixture = TestBed.createComponent(AddemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
