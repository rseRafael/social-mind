import { Component, OnInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { RouteControllerService } from '../route-controler.service';

import { ActivatedRoute } from '@angular/router';
/*
Location's go function not working.
*/
import { Location } from '@angular/common';
import { filter, pairwise } from 'rxjs/operators';




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
    console.log(`currentPath: ${currentPath}`);
    if (currentPath.search("seemedia") != -1) {
      this.path = '/seemedia';
    }
    else if (currentPath.search("addmedia") != -1) {
      this.path = '/addmedia';
    }
    else {
      this.path = null;
    }
    console.log(`now: ${this.location.path()}`)
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


  }


}
