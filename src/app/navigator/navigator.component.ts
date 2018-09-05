import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  public seemedia = false;

  constructor(private router: ActivatedRoute, private location: Location) { }

  ngOnInit() {
  }

  onClick(){
   this.seemedia = true;
   console.log(this.seemedia);
  }
  
  back(){
    this.location.back();
  }
}
