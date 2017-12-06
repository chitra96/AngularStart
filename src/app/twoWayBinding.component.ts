
import { Component } from '@angular/core';

@Component({
    selector: 'two-Way-binding',
    template: `<input type = 'firstName' [(ngModel)]="fname">
                    <input type = 'lastName' [(ngModel)]="lname">
                    <div>Full Name: {{fname}} {{lname}}</div>`
})
export class BindingExmplComponent {
        public fname;
        public lname;
    }
