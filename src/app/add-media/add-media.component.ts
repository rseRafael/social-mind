import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {
  public today: String = "1999-01-01T23:59";
  public tomorrow: String = "1999-01-02T23:59";
  constructor() { }

  ngOnInit() {
    this.resizeComponent();
    window.onresize = () => {
      this.resizeComponent();
    }
    this.getDate();
    console.log(this.today);
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

  getDate() {
    var ISOformat = "yyyy-mm-ddThh:mm"
    var now = new Date();
    this.today = now.toISOString().substring(0, ISOformat.length);
    var tomorrow  = now.setDate(now.getDate() + 1);
    this.tomorrow = now.toISOString().substring(0, ISOformat.length);
  }

  testForm(){
    var form: any = document.getElementById("media-form");
    var Form: any = new FormData(form);
    for (var [key, value] of Form.entries()) { 
      console.log("k: " + key, "v: " +value);
    }
  }
}
