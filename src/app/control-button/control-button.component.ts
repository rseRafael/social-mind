import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ctrl-btn',
  templateUrl: './control-button.component.html',
  styleUrls: ['./control-button.component.css']
})
export class ControlButtonComponent implements OnInit {

  public opened = null;

  constructor() { }

  ngOnInit() {
  }

  animate(){
    if(this.opened === null){
      this.opened = false;
    }
    else{
      this.opened = !this.opened;
    }
   
  }
}
