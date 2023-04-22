import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IpCheckerModule } from './modules/ip-checker/ip-checker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IpCheckerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
