import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassBindingComponent } from './classBinding.component';
import { sDirectiveComponent } from './structuralDirectives.component';
import { ClickMeComponent } from './click-me.component';
import { BindingExmplComponent } from './twoWayBinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassBindingComponent,
    sDirectiveComponent,
    ClickMeComponent,
    BindingExmplComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
