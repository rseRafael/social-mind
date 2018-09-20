import { BrowserModule } from   '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { SeeMediaComponent } from './see-media/see-media.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { MediaOptionsComponent } from './media-options/media-options.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { RedirectErrorDialogComponent } from './redirect-error-dialog/redirect-error-dialog.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SettingsBtnComponent } from './settings-btn/settings-btn.component';


@NgModule({
  declarations: [
    AppComponent,
    SeeMediaComponent,
    AddMediaComponent,
    MediaOptionsComponent,
    NavigatorComponent,
    RedirectErrorDialogComponent,
    ControlButtonComponent,
    SettingsBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
