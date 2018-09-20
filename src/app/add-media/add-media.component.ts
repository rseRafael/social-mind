import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, timeInterval } from 'rxjs/operators';



class MonitorableMedia {
  mediaLink: String;
  startDate: String;
  endDate: String;
  constructor(mediaLink: String, startDate: String, endDate: String){
    this.mediaLink = mediaLink;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {
  public addmediaForm: FormGroup = new FormGroup({
    'media-link': new FormControl(""),
    'start-date': new FormControl(""),
    'end-date': new FormControl(""),

  });
  public today: String = "1999-01-01T23:59";
  public tomorrow: String = "1999-01-02T23:59";
  public message: String = " empty ";
  public received: Boolean = false;
  public hassent: Boolean  = false;
  public links: Array<String> = [];
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
    if(this.verifyMediaLink(mediaLink)){
      var mediaData: any= new MonitorableMedia(mediaLink.value, startDate.value, endDate.value);
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
    this.links.push(null);
  }
}
