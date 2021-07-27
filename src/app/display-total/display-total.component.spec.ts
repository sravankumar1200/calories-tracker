import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTotalComponent } from './display-total.component';

describe('DisplayTotalComponent', () => {
  let component: DisplayTotalComponent;
  let fixture: ComponentFixture<DisplayTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
