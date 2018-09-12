import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { SeeMediaComponent } from './see-media/see-media.component';
import { AddMediaComponent } from './add-media/add-media.component';
import { MediaOptionsComponent } from './media-options/media-options.component';

const routes: Routes = [
  { path: 'seemedia/facebook/content', component: SeeMediaComponent },
  { path: 'seemedia/youtube/content', component: SeeMediaComponent },
  { path: 'seemedia/twitter/content', component: SeeMediaComponent },
  { path: 'seemedia/instagram/content', component: SeeMediaComponent },
  { path: 'addmedia/facebook/config', component: AddMediaComponent },
  { path: 'addmedia/youtube/config', component: AddMediaComponent },
  { path: 'addmedia/twitter/config', component: AddMediaComponent },
  { path: 'addmedia/instagram/config', component: AddMediaComponent },
  { path: 'addmedia/options', component: MediaOptionsComponent},
  { path: 'seemedia/options', component: MediaOptionsComponent},
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
