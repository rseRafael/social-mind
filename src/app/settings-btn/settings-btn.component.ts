import { Component, OnInit, Input } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'settings-btn',
  templateUrl: './settings-btn.component.html',
  styleUrls: ['./settings-btn.component.css']
})
export class SettingsBtnComponent implements OnInit {

  public open: boolean = null;
  @Input() elemId: string = null;
  constructor() {
   }

  ngOnInit() {
  }

  setOpen(){
    if(this.open === null){
      this.open = true;
    }
    else{
      this.open = !this.open;
    }
  }

  deleteElem(){
    try{
      var elem = document.getElementById(this.elemId);
      elem.style.display = "none";
    }
    catch(err){
      //nothing  
    }
    
  }
}
