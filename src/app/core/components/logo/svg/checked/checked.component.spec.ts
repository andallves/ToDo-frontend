import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedComponent } from './checked.component';

describe('CheckedComponent', () => {
  let component: CheckedComponent;
  let fixture: ComponentFixture<CheckedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CheckedComponent],
    });
    fixture = TestBed.createComponent(CheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
