import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, timeInterval } from 'rxjs/operators';



class MonitorableMedia {
  mediaLinks: Array<string>;
  startDate: string;
  endDate: string;
  constructor(mediaLinks: Array<string>, startDate: string, endDate: string){
    this.mediaLinks = mediaLinks;
    this.startDate = startDate;
    this.endDate = endDate;
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
export class AddMediaComponent implements OnInit {
  public today: String = "1999-01-01T23:59";
  public tomorrow: String = "1999-01-02T23:59";
  public message: String = " empty ";
  public received: Boolean = false;
  public hassent: Boolean  = false;
  public links: Array<Link> = [];
  public newLinks: number = 0;
  public mediaLinks: Array<string> = [];
  public divLinkPattern = `addmedia-divLinkId-`;
  public linkIdPattern = `addmedia-idLink-`;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.resizeComponent();
    window.onresize = () => {
      this.resizeComponent();
    }
    this.getDate();
    console.log(this.today);
  }

  resizeComponent() {
    var component = document.getElementById("addmedia-component");
    var outlet = document.getElementById("app-outlet");
    var h = `${outlet.clientHeight}px`;
    var w = `${outlet.clientWidth}px`;
    component.style.height = h;
    component.style.width = w;
    console.log(h + ", " + w);
  }

  getDate() {
    var ISOformat = "yyyy-mm-ddThh:mm"
    var now = new Date();
    this.today = now.toISOString().substring(0, ISOformat.length);
    var tomorrow  = now.setDate(now.getDate() + 1);
    this.tomorrow = now.toISOString().substring(0, ISOformat.length);
  }

  sendForm(event, form){
    event.preventDefault();
    var mediaLink: any = document.getElementById("media-link");
    var startDate: any = document.getElementById("start-date");
    var endDate: any = document.getElementById("end-date");
    this.getNewLinks();
    this.mediaLinks.push(mediaLink.value);
    console.log(this.mediaLinks);
    if(this.verifyMediaLink(mediaLink)){
      var mediaData: any= new MonitorableMedia(this.mediaLinks, startDate.value, endDate.value);
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
    this.newLinks +=  1;
    let divId = this.divLinkPattern + `${this.newLinks}`;
    let linkId = this.linkIdPattern + `${this.newLinks}`;
    var link: Link = {divId: divId, linkId: linkId}
    this.links.push(link);
    this.newLinks = this.links.length;
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
}
