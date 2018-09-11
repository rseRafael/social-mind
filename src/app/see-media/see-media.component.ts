import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-see-media',
  templateUrl: './see-media.component.html',
  styleUrls: ['./see-media.component.css']
})
export class SeeMediaComponent implements OnInit {
  public locationINFO: Array<Object> = [];
  public routeINFO: Array<Object> = [];

  constructor( private location: Location) {

  }

  ngOnInit() {
    this.dissectObj(this.location, this.locationINFO);
    //this.dissectObj(this.route, this.routeINFO);
    console.log("PATH:");
    console.log(this.location.path());
    console.log(this.location.isCurrentPathEqualTo(this.location.path()));
  }

  dissectObj(targetObj: Object, sourceObj: Array<Object>, ) {
    for (var prop in targetObj) {
      var _prop = targetObj[prop];
      var type = typeof _prop;
      var value = '';
      if (type != "object" && type != "undefined" && type != "function") {
        value = `= ${_prop}`;
      }
      var obj = {info: `${prop}: ${type} ${value}`};
      sourceObj.push(obj);
    }
  }

}
