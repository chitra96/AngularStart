import { Component } from '@angular/core';

@Component({
    selector: 'app-click-me',
    template: `
      <button (click)="onClickMe()">Click me!</button>
      {{clickMessage}}<br>
      <p>keyup for input box</p>
      <input (keyup)="onKey($event)">
      <p>{{values}}</p>
      <p>keyup for input box after enter</p>
      <input #box (keyup.enter)="onEnter(box.value)">
      <p>{{val}}</p>`
})
export class ClickMeComponent {
    clickMessage = '';
    values = '';
    val = '';
    
      onClickMe() {
        this.clickMessage = 'this appears after clicking!!';
      }      
        onKey(event: KeyboardEvent) {
          this.values = (<HTMLInputElement>event.target).value;
        }
        onEnter(val: string) { this.val = val; }
}

