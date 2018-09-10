import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.resizeComponent();
    window.onresize = ()=>{
      this.resizeComponent();
    }
  }

  resizeComponent() {
    var component = document.getElementById("addmedia-component");
    var outlet = document.getElementById("app-outlet");
    var h = `${outlet.clientHeight}px`;
    var w = `${outlet.clientWidth}px`;
    component.style.height = h;
    component.style.width = w;
    console.log(h + ", " + w);
  }

}
