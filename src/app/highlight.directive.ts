import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color: string = 'yellow';

  constructor(private el: ElementRef) {

  }
  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

}
