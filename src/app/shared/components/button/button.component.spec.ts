import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';

describe(ButtonComponent.name, () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();
    const ariaLabel = 'aria test';
    const buttonText = 'Text value';

    fixture = TestBed.createComponent(ButtonComponent);
    fixture.componentRef.setInput('ariaLabel', ariaLabel);
    fixture.componentRef.setInput('buttonText', buttonText);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Should render with passed aria-label and button text when called', () => {
    fixture.detectChanges();
    const buttonElement = fixture.debugElement.query(
      By.css('.btn-submit')
    ).nativeElement;
    const ariaLabel = buttonElement.getAttribute('aria-label');
    expect(ariaLabel).toContain('aria test');
  });

  it(`#${ButtonComponent.prototype.onClick.name}
    should trigger (@Output onClicked) when called`, () => {
    const spy = spyOn(component.onClicked, 'emit');
    fixture.detectChanges();
    component.onClick();
    expect(spy).toHaveBeenCalled();
  });
});
