import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClickMeComponent } from './user-input/click-me/click-me.component';
import { KeyupComponent } from './user-input/keyup/keyup.component';
import { LoopBackComponent } from './user-input/loop-back/loop-back.component';


@NgModule({
  declarations: [
    AppComponent,
    ClickMeComponent,
    KeyupComponent,
    LoopBackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
