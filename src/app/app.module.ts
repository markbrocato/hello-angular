import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import ToolBar from './ToolBar';
import Button from './Button';
import Base from './Base';

@NgModule({
  declarations: [
    AppComponent,
    ToolBar,
    Button,
    Base
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
