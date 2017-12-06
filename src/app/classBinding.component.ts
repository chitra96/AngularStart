import { Component } from '@angular/core';

@Component({
  selector: 'classBinding',
  template: `<div [class.myClass]="applyClass">This is example of class-binding</div>
            <div [style.color]="applyInlineStyleColor? 'blue' : 'orange'">
            This is example of style-binding</div>
            `,
    styles: [`.myClass{
        color:red;
    }`]
})
export class ClassBindingComponent {
    public applyClass = true;
    public applyInlineStyleColor = true;
}
