import { Component, OnInit } from '@angular/core';
import { LayoutChangesService } from './layout-changes.service';
import { setCurrentInjector } from '@angular/core/src/di/injector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  open = false;
  animated = false;
  shouldAnimate = false;
  init = true;
  constructor(private layoutchange: LayoutChangesService) {

  }
  ngOnInit() {
    //this.moveBtnDiv();
  }
  moveBtnDiv() {
    var btnDiv = document.getElementById("btn-div");
    var navDiv = document.getElementById("nav-div");
    // right position
    var rPst = `-${navDiv.clientWidth}px`;
    btnDiv.style.right = rPst;
  }
  btnClick() {
    this.init = false;
    this.animated = false;
    /*
    if (!open) {
      setTimeout(
        () => {
          var navDiv = document.getElementById("nav-div");
          navDiv.style.display = "none";
          console.log("foi!")
        },
        500
      );
    }
    else {
      var navDiv = document.getElementById("nav-div");
      navDiv.style.display = "inline-block";
    }
    */
    this.open = !this.open;
    this.shouldAnimate = true;
    setTimeout(
      ()=>{
        this.animated= true;
        this.resizeComponent();
      },
      500
    );

  }
  resizeBtn(){

  }
  Changed(event){
    console.log("it worked");
    console.log(event);
    console.log("-------------------");
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
