import { Component } from '@angular/core';

@Component({
  selector: 'sDirective',
  template:`<p *ngIf="showElement">
                Expression is true and ngIf is true.
                This paragraph is in the DOM.
            </p>
            <p *ngIf="dontShowElement">
                Expression is false and ngIf is false.
                This paragraph is not in the DOM.
            </p>
            <ul>
                <li *ngFor="let color of colors">{{color}}</li>
            </ul>`
})
export class sDirectiveComponent {
    public showElement = true;
    public dontShowElement = false;
    public colors =['red', 'blue', 'green'];
}


