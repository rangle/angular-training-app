import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a2t-text-area',
  template: `
    <textarea 
      [placeholder]="placeholder"
      (keyup)="valueChange.emit($event.target.value)">{{ value }}</textarea> 
  `,
})
export class TextAreaComponent {
  @Input() placeholder: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
}
