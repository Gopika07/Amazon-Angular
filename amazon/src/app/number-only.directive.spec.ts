import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header/header.component';
import { NumberOnlyDirective } from './number-only.directive';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('NumberOnlyDirective', () => {

let component: HeaderComponent;
let fixture: ComponentFixture<HeaderComponent>;
let inputEl: DebugElement;

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [ HeaderComponent ],
    imports: [FormsModule, NumberOnlyDirective],
    providers: [
      { provide: ComponentFixtureAutoDetect, useValue: true }
    ]
  }).compileComponents;

  fixture = TestBed.createComponent(HeaderComponent);
  component = fixture.componentInstance;
  inputEl = fixture.debugElement.query(By.directive(NumberOnlyDirective));

  fixture.detectChanges();
});

it('should only allow numbers in the input', () => {
  const inputNativeElement = inputEl.nativeElement as HTMLInputElement;

  inputNativeElement.value = 'abc123xyz';
  inputNativeElement.dispatchEvent(new Event('input'));

  expect(inputNativeElement.value).toBe('123');
});

  it('should create an instance', () => {
    const directive = new NumberOnlyDirective(inputEl);
    expect(directive).toBeTruthy();
  });
});
