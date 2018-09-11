import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteControllerService } from '../route-controler.service';
/*
import { ActivatedRoute } from '@angular/router';
Location's go function not working.
*/
import { Location } from '@angular/common';



@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  public seemedia = false;
  public path: String = null;

  constructor(private router: Router, private location: Location, private routeCtrl: RouteControllerService) {
  }

  ngOnInit() {
  }

  goToSeeMedia() {
    this.router.navigateByUrl("/seemedia/options")
    .then((value) => {
      if (value) {
        this.path = '/seemedia';
        this.routeCtrl.destinyPath = '/seemedia/content';
      }
      else {
      }
    });
  }

  goToAddMedia() {
    this.router.navigateByUrl("/addmedia/options")
    .then((value) => {
      if (value) {
        this.path = '/addmedia';
        this.routeCtrl.destinyPath = '/addmedia/';
      }
      else {
      }
    });
  }

  goBack() {
    this.location.back();
    var path = this.location.path();
    if (path.search("seemedia") != -1) {
      this.path = '/seemedia';
    }
    else if (path.search("addmedia")) {
      this.path = '/addmedia';
    }
    else {
      this.path = null;
    }
  }

}
