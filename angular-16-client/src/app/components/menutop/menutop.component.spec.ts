import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutopComponent } from './menutop.component';

describe('MenutopComponent', () => {
  let component: MenutopComponent;
  let fixture: ComponentFixture<MenutopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenutopComponent]
    });
    fixture = TestBed.createComponent(MenutopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
