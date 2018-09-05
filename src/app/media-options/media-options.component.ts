import { Component, OnInit } from '@angular/core';
import { createInterface } from 'readline';

@Component({
  selector: 'app-media-options',
  templateUrl: './media-options.component.html',
  styleUrls: ['./media-options.component.css']
})
export class MediaOptionsComponent implements OnInit {
  public medias: Array<Media> = [
    {name: "Facebook", imgSrc: "../../../images/facebook-btn.png", color: "#3b5998"},
    {name: "Instagram", imgSrc: "../../../images/instagram-btn.png", color: ""},
    {name: "Twitter", imgSrc: "../../../images/twitter-btn.png", color: "#1da1f2"},
    {name: "Youtube", imgSrc: "../../../images/instagram-btn.png", color: "#de2824"},
    
  ]
  constructor() { }

  ngOnInit() {
  }

}


interface Media{
  name: String;
  imgSrc: String;
  color: String;
}