import { Component, OnInit } from '@angular/core';
import { RouteControllerService } from '../route-controler.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RedirectErrorDialogComponent } from '../redirect-error-dialog/redirect-error-dialog.component';
import { Location } from '@angular/common';

interface Media {
  name: String;
  color: String;
  divId: String;
  iconDiv: String;
  class: String;
}

@Component({
  selector: 'app-media-options',
  templateUrl: './media-options.component.html',
  styleUrls: ['./media-options.component.css']
})
export class MediaOptionsComponent implements OnInit {
  public Header: String = '';
  public medias: Array<Media> = [
    { name: "facebook", color: "#3c579e", divId: "media-div-fb", class: "media-icon fab fa-facebook-f", iconDiv: "media-icon-fb" },
    { name: "instagram", color: "", divId: "media-div-ig", class: "media-icon fab fa-instagram", iconDiv: "media-icon-ig" },
    { name: "twitter", color: "#17ccff", divId: "media-div-tt", class: "media-icon fab fa-twitter", iconDiv: "media-icon-tt" },
    { name: "youtube", color: "#da281e", divId: "media-div-yt", class: "media-icon fab fa-youtube", iconDiv: "media-icon-yt" },
  ]
  constructor(private routeCtrl: RouteControllerService, private router: Router, private dialog: MatDialog, private location: Location) {
  }

  ngOnInit() {
    this.setHeader();
    //this.resizeComponent();
    console.log("EBA");
  }

  resizeComponent() {
    var outlet = document.getElementById("app-outlet");
    var height = `${outlet.clientHeight}px`;
    var width = `${outlet.clientWidth}px`;
    var mediaComp = document.getElementById("media-main-content");
    mediaComp.style.height = height;
    mediaComp.style.width = width;
    console.log(height);
    console.log(width);

  }

  setHeader() {
    try{
      var currentPath = this.location.path();
      if (currentPath.search("addmedia") != -1) {
        this.Header = "Monitore uma das mídias abaixo: ";
      }
      else if (currentPath.search("seemedia") != -1) {
        this.Header = "Veja os Posts uma das mídias abaixo: ";
      }
      else {
        this.Header = "Selecione uma das mídias abaixo: ";
      }
    }
    catch(err){
      this.Header = "Selecione uma das mídias abaixo: ";
    }
  }
   

  redirect(mediatype: string) {
    var currentPath = this.location.path();
    var pageUrl ="";
    if (currentPath.search("addmedia") !== -1) {
      pageUrl = `addmedia/${mediatype}/config`;
      this.router.navigateByUrl(pageUrl);
      
    }
    else if (currentPath.search("seemedia") !== -1) {
      pageUrl = `/seemedia/${mediatype}/content`;
      this.getMedia(mediatype, pageUrl);
    }
    else {
      this.dialog.open(RedirectErrorDialogComponent, {
        width: '500px',
        height: '250px',

      });
      this.Header = "Selecione uma das mídias abaixo: "
    }
  }

  getMedia(mediatype: string, nextRoute: string){
    var url = `http://localhost:8000/media/get?mediatype=${mediatype}`;
    var data = {
      mediatype: "mediateste",
    }
    var options = {
      method: "GET", 
      headers: { "Content-Type": "application/json; charset=utf-8"},
    }
    fetch(url, options)
    .then(response => {
      return response.json()
    })
    .then( json => {
      console.log(json);
      this.router.navigateByUrl(nextRoute);
    })
    .catch(err=>{
      console.log("Deu erro");
      console.log(err);
    })
  }
}
