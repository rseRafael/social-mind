import { Component, OnInit } from '@angular/core';
import { RouteControllerService} from '../route-controler.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { RedirectErrorDialogComponent } from '../redirect-error-dialog/redirect-error-dialog.component';
import { NavigatorComponent } from '../navigator/navigator.component';

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
  public Header: String = '';
  public medias: Array<Media> = [
    {name: "Facebook", color: "#3c579e", divId:"media-div-fb", class: "media-icon fab fa-facebook-f", iconDiv: "media-icon-fb" },
    {name: "Instagram", color: "", divId:"media-div-ig", class: "media-icon fab fa-instagram", iconDiv: "media-icon-ig"},
    {name: "Twitter", color: "#17ccff", divId:"media-div-tt", class: "media-icon fab fa-twitter", iconDiv: "media-icon-tt"},
    {name: "Youtube",color: "#da281e", divId:"media-div-yt", class: "media-icon fab fa-youtube", iconDiv: "media-icon-yt"},
  ]
  constructor(private routeCtrl: RouteControllerService, private router: Router, private dialog: MatDialog ){ 
  }

  ngOnInit(){
    this.setHeader();
    this.resizeComponent();
  }

  resizeComponent(){
    var outlet = document.getElementById("app-outlet");
    var height = `${outlet.clientHeight}px`;
    var width = `${outlet.clientWidth}px`;
    var mediaComp = document.getElementById("media-main-content");
    mediaComp.style.height = height;
    mediaComp.style.width = width;
    console.log(height);
    console.log(width);

  }

  setHeader(){
    if(this.routeCtrl.destinyPath.search("addmedia") != -1){
      this.Header = "Monitore uma das mídias abaixo: ";
    }
    else if(this.routeCtrl.destinyPath.search("seemedia") != -1){
      this.Header = "Veja os Posts uma das mídias abaixo: ";
    }
    else{
      this.Header = "Selecione uma das mídias abaixo: "
    }
  }

  redirect(){
    if(this.routeCtrl.destinyPath.search("addmedia") != -1 && false){
      this.router.navigateByUrl("");
    }
    else if(this.routeCtrl.destinyPath.search("seemedia") != -1 && false){
      this.router.navigateByUrl("");
    }
    else{
      this.dialog.open( RedirectErrorDialogComponent, {
        width: '500px',
        height: '250px',
        
      });
      this.Header = "Selecione uma das mídias abaixo: "
    }
  }
}