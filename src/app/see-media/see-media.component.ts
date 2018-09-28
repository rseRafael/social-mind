import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-see-media',
  templateUrl: './see-media.component.html',
  styleUrls: ['./see-media.component.css']
})
export class SeeMediaComponent implements OnInit {
  public locationINFO: Array<Object> = [];
  public routeINFO: Array<Object> = [];

  constructor( private location: Location, private actRoute: ActivatedRoute) {

  }

  ngOnInit() {
    
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
