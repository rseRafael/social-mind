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
    this.moveBtnDiv();
    window.onresize = (event) => {
     this.moveBtnDiv();
    }
  }

  onClick() {
    this.seemedia = true;
    console.log(this.seemedia);
  }

  back() {
    this.location.back();
  }

  moveBtnDiv(){
    var navDiv = document.getElementById("nav-div");
    var btnDiv = document.getElementById("btn-div");
    var rightPosition = `-${navDiv.clientWidth + 2}px`;
    var bottomPosition = `${navDiv.clientHeight + 2}px`;
    var size = `${Math.round(navDiv.clientWidth * 20 /100)}px`;
    btnDiv.style.right = rightPosition;
    btnDiv.style.bottom = bottomPosition;
    btnDiv.style.height = size;
  }
}
