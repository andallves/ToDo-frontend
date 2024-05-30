import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

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

  it(`#${ButtonComponent.prototype.onClick.name}
    should trigger (@Output onClicked) when called`, () => {
    spyOn(component.onClicked, 'emit');
    fixture.detectChanges();
    component.onClick();
    expect(component.onClicked.emit).toHaveBeenCalled();
  });
});
