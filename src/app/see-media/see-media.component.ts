import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SeemediaContentService } from '../seemedia-content.service';

@Component({
  selector: 'app-see-media',
  templateUrl: './see-media.component.html',
  styleUrls: ['./see-media.component.css']
})
export class SeeMediaComponent implements OnInit {
  public locationINFO: Array<Object> = [];
  public routeINFO: Array<Object> = [];

  public completos: Array<any> = [];
  public monitorando: Array<any> = [];
  public futuro: Array<any> = [];

  public header: string = "Mídias";

  constructor( private location: Location, 
               private actRoute: ActivatedRoute,
               private mediaService: SeemediaContentService) {

  }

  ngOnInit() {
    this.setMedias();
    this.getHeader();
  }

  dissectObj(targetObj: Object, sourceObj: Array<Object>, ) {
    for (var prop in targetObj) {
      var _prop = targetObj[prop];
      var type = typeof _prop;
      var value = '';
      if (type != "object" && type != "undefined" && type != "function") {
        value = `= ${_prop}`;
      }
      var obj = {info: `${prop}: ${type} ${value}`};
      sourceObj.push(obj);
    }
  }

  setMedias(){
    this.completos = this.mediaService.completos;
    this.monitorando = this.mediaService.monitorando;
    this.futuro = this.mediaService.futuro;
    var medias = [this.completos, this.monitorando, this.futuro];
    for (var mediatype of medias){
      var index = 1;
      for (var media of mediatype){
        media['index'] = index;
        index += 1;
        media['startdate'] = this.formatISODate(media['startdate']);
        media['enddate'] = this.formatISODate(media['enddate']);
      }
    }
    
  }

  formatISODate(isodate){
    var date = isodate.substring(0, isodate.indexOf("+"));
    date = new Date(Date.parse(date));
    return date.toLocaleDateString();
  }

  getHeader(){
    var path = this.location.path();
    this.header = "Mídias do "
    if (path.indexOf("facebook") !== -1){
      this.header += "Facebook";
    }
    else if (path.indexOf("twitter") !== -1 ){
      this.header += "Twitter";
    } 
    else if (path.indexOf("youtube") !== -1 ){
      this.header += "Youtube";
    }
    else if (path.indexOf("instagram") !== -1 ){
      this.header += "Instagram";
    }
    else{
      this.header = 'Mídias Cadastradas';
    }
  }
}
