import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultPipe } from './result.pipe';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultPipe,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
