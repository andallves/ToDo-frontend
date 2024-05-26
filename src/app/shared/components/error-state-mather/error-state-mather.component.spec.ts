import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorStateMatherComponent } from './error-state-mather.component';

describe('ErrorStateMatherComponent', () => {
  let component: ErrorStateMatherComponent;
  let fixture: ComponentFixture<ErrorStateMatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorStateMatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorStateMatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
