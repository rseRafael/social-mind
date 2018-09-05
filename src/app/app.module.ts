import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SeeMediaComponent } from './see-media/see-media.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { MediaOptionsComponent } from './media-options/media-options.component';
import { NavigatorComponent } from './navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    SeeMediaComponent,
    AddMediaComponent,
    MediaOptionsComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
