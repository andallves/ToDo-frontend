import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LogoComponent],
    });
    const colorful = true;
    fixture = TestBed.createComponent(LogoComponent);
    fixture.componentRef.setInput('colorful', colorful);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Shoud be colorful when called with isColorful equal true', () => {
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('span')
    ).nativeElement;
    const className = buttonElement.getAttribute('class');
    expect(className).toContain('colorful');
  });
});
