import { Component, OnInit } from '@angular/core';


interface Media{
  name: String;
  color: String;
  divId: String;
  iconDiv: String;
  class:String;
}

@Component({
  selector: 'app-media-options',
  templateUrl: './media-options.component.html',
  styleUrls: ['./media-options.component.css']
})
export class MediaOptionsComponent implements OnInit {
  public medias: Array<Media> = [
    {name: "Facebook", color: "#3c579e", divId:"media-div-fb", class: "media-icon fab fa-facebook-f", iconDiv: "media-icon-fb" },
    {name: "Instagram", color: "", divId:"media-div-ig", class: "media-icon fab fa-instagram", iconDiv: "media-icon-ig"},
    {name: "Twitter", color: "#17ccff", divId:"media-div-tt", class: "media-icon fab fa-twitter", iconDiv: "media-icon-tt"},
    {name: "Youtube",color: "#da281e", divId:"media-div-yt", class: "media-icon fab fa-youtube", iconDiv: "media-icon-yt"},

  ]
  constructor(){ 
  }

  ngOnInit() {
    this.resizeComponent();
  }

  resizeComponent(){
    console.log("1 - started");
    var outlet = document.getElementById("app-outlet");
    var height = `${outlet.clientHeight}px`;
    var width = `${outlet.clientWidth}px`;
    var mediaComp = document.getElementById("media-main-content");
    mediaComp.style.height = height;
    mediaComp.style.width = width;
    console.log(height);
    console.log(width);

  }
}