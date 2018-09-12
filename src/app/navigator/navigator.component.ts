import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteControllerService } from '../route-controler.service';

import { ActivatedRoute } from '@angular/router';
/*
Location's go function not working.
*/
import { Location } from '@angular/common';



@Component({
  selector: 'side-nav',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  public seemedia = false;
  public path: String = null;

  constructor(private router: Router, private location: Location, private routeCtrl: RouteControllerService) {
  }

  ngOnInit() {
    this.updateSelected();
  }
  updateSelected() {
    var currentPath = this.location.path();
    if (currentPath.search("seemedia") != -1) {
      this.path = '/seemedia';
    }
    else if (currentPath.search("addmedia") != -1) {
      this.path = '/addmedia';
    }
    else {
      this.path = null;
    }
    console.log('selected updated');
  }
  goToSeeMedia() {
    this.router.navigateByUrl("/seemedia/options")
      .then((value) => {
        if (value) {
          this.updateSelected();
        }
        else {
        }
      });
  }

  goToAddMedia() {
    this.router.navigateByUrl("/addmedia/options")
      .then((value) => {
        if (value) {
          this.updateSelected();
        }
        else {
        }
      });
  }

  goBack() {
    this.location.back();
    this.updateSelected();
  }

}
