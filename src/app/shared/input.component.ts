import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'a2t-input',
  template: `
    <input 
      type="text" 
      [placeholder]="placeholder" 
      [value]="value"
      (keyup)="valueChange.emit($event.target.value)"> 
  `,
})
export class InputComponent {
  @Input() placeholder: string;
  @Input() value: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
}
