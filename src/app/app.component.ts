import { Component, OnInit } from '@angular/core';
import { setCurrentInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'app';
  public opened = false;
  public animated = true;

  constructor() {

  }
  ngOnInit() {
  }

  animateNow() {
   console.log("-1-");
   this.animated = false;
   this.opened = !this.opened;
   console.log("-2-");
   setTimeout(
      ()=>{
        this.animated= true;
        console.log("-3-");
        //this.resizeComponent();
      },
      500
   );
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
