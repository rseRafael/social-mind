import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SeeMediaComponent } from './see-media/see-media.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { MediaOptionsComponent } from './media-options/media-options.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeMediaComponent,
    AddMediaComponent,
    MediaOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
