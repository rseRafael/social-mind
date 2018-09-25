import { Component, OnInit } from '@angular/core';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public opened = null;

  constructor() {

  }
  ngOnInit() {
  }

  changeOpened(){
   if(this.opened === null){
    this.opened = true;
   }
   else{
    this.opened = !this.opened;
   }
   console.log("Clicked");

  }
 
  resizeComponent() {
    var component = document.getElementById("addmedia-component");
    var contentDiv = document.getElementById("content-div");
    var h = `${contentDiv.clientHeight}px`;
    var w = `${contentDiv.clientWidth}px`;
    component.style.height = h;
    component.style.width = w;
    console.log(h + ", " + w);
  }

}
