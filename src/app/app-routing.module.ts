import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SeeMediaComponent } from './see-media/see-media.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { MediaOptionsComponent } from './media-options/media-options.component';

const routes: Routes = [
  { path: 'seemedia', component: SeeMediaComponent },
  { path: 'addmedia', component: AddMediaComponent },
  { path: 'mediaoptions', component: MediaOptionsComponent },
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
  ]
})
export class AppRoutingModule { }
