import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, timeInterval } from 'rxjs/operators';
import { Location } from '@angular/common';


class MonitorableMedia {
  mediaLinks: Array<string>;
  startDate: string;
  endDate: string;
  mediaType: string;
  constructor(mediaLinks: Array<string>, startDate: string, endDate: string, mediaType: string){
    this.mediaLinks = mediaLinks;
    this.startDate = startDate;
    this.endDate = endDate;
    this.mediaType = mediaType;
  }
}

class Link {
  divId: string;
  linkId: string;
}

@Component({
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit, AfterViewInit {
  public mediaTypes: Array<string> = ['facebook', 'instagram', 'twitter', 'youtube'];
  public message: String = " empty ";
  public received: Boolean = false;
  public hassent: Boolean  = false;
  public links: Array<Link> = [];
  public newLinks: number = 0;
  public mediaLinks: Array<string> = [];
  public divLinkPattern = `addmedia-divLinkId-`;
  public linkIdPattern = `addmedia-idLink-`;
  public mediaType: string = "";
  constructor(private http: HttpClient, private location: Location) { }

  ngOnInit() {
    this.getDate();
    console.log("ngOnInit()");
    console.log(new Date().toLocaleTimeString())
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit()");
    console.log(new Date().toLocaleTimeString());
    this.getDate();
    this.setMediaType();
  }

  getDate() {
    try{
      var ISOformat = "yyyy-mm-ddThh:mm"
      var d1: Date = new Date();
      d1.setHours(d1.getHours() + 1);
      var iso1 = d1.toISOString().substring(0, ISOformat.length);
      d1.setDate(d1.getDate() + 1);
      var d2: Date = d1;
      var iso2 = d2.toISOString().substring(0, ISOformat.length);
      console.log(d2.toISOString());
      var D1: any = document.getElementById("start-date");
      var D2: any = document.getElementById("end-date");
      D1.value = iso1;
      D2.value = iso2;
    }
    catch(err){
      console.log("Some error has occured at getDate function.")
      console.log(`Error:\n${err}\n-----------------------\n`);
    }
   
  }

  sendForm(event){
    event.preventDefault();

    var mediaLink: any = document.getElementById("media-link");
    var startDate: any = document.getElementById("start-date");
    var endDate: any = document.getElementById("end-date");

    this.mediaLinks.push(mediaLink.value);
    this.getNewLinks();
    
    console.log(this.mediaLinks);

    if(this.verifyMediaLink(mediaLink)){
      var mediaData: any= new MonitorableMedia(this.mediaLinks, startDate.value, endDate.value, this.mediaType);
      var url = "http://127.0.0.1:8000/media/add/";
      var data = new FormData();
      data.append("mediaData", JSON.stringify(mediaData));
      fetch(url, {
        method: "POST", 
        mode: "cors",
        headers: new Headers(),
        body: data,
      })
      .then(
        res=> res.json()
      )
      .then(res =>{
        console.log("second response: ");
        console.log(res) ;
        this.received = true;
        this.message = res['msg'];
        setInterval(
          ()=>{
            this.received = false;
            this.message  = " empty "
          }, 
          30000
        );
      })
      .catch(
        error=>{
        }
      )
      this.hassent = true;
    }

  }

  httpRequestOne(){

  }

  httpRequestTwo(){

  }

  verifyMediaLink(link:String): Boolean{
    if(link){
      /*INSERT: more verification code*/
      return true;
    }
    else{
      return false;
    }
  }

  verifyDates(startdate: Date , enddate: Date ){
    
  }

  addLink(){
    let number = this.links.length;
    let divId = this.divLinkPattern + `${number}`;
    let linkId = this.linkIdPattern + `${number}`;
    var newlink: Link = {divId: divId, linkId: linkId}
    this.links.push(newlink);
  }
  deleteURLForm(link: Link){
    var elem = document.getElementById(link.divId);
    elem.style.display = "none";
  }

  deleteLink(divId: string){
    var index = 0;
    for (var link of this.links){
      if(link.divId === divId){
        this.links[index] = null;
        break;
      }
      index += 1;
    }
  }

  returndivId(link:any): string{
    return link.divId;
  }

  getNewLinks(){
    for(var link of this.links){
      if( ! this.IsDisplayNone(link.divId) ){
        console.log(link.divId);
        let value = this.getLinkValue(link.linkId);
        if(value !== null){
          this.mediaLinks.push(value);
        }
      }
     
    }
  }

  IsDisplayNone(elemId:string){
    var elem = document.getElementById(elemId);
    if(elem.style.display === "none"){
      return  true;
    }
    else{
      return false;
    }
  }

  getLinkValue(elemId: string){
    try{
      var elem: any = document.getElementById(elemId);
      return elem.value;
    }
    catch(Err){
      return null;
    }
  }

  setMediaType(){
    try{
      var url: String= this.location.path();
      for (var media of this.mediaTypes){
        if(url.search(media) !== -1){
          this.mediaType = media;
          break;
        }
      }
    }
    catch(err){
      console.log("An error has occurred in setMediaType function.");
      console.log(`Error:\n${err}\n-------------------------------\n`);
    }
    
  }
}
