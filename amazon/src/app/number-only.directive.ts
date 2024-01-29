import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]',
  standalone: true
})
export class NumberOnlyDirective {

  constructor(private elRef: ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event: Event) {
		const initalValue = this.elRef.nativeElement.value;
		this.elRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
		if (initalValue !== this.elRef.nativeElement.value) {
			event.stopPropagation();
		}
	}
  

}
