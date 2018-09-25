import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media-input',
  templateUrl: './media-input.component.html',
  styleUrls: ['./media-input.component.css']
})
export class MediaInputComponent implements OnInit {

  @Input() public height="50px";
  @Input() public width="550px";
  @Input() public title="No Title";
  @Input() public iconClass="no-icon-class";
  @Input() public inputType="date";
  @Input() public divId = "";

  constructor() { }

  ngOnInit() {
    this.consoleLog();
    this.setSize();
  }
  consoleLog(){
    console.log(this.title);
    console.log(this.iconClass);
    console.log(this.inputType);
    console.log(this.divId);

  }
  setSize(){
    if(this.divId){
      try{
        var elem = document.getElementById(this.divId);
        elem.style.height = this.height;
        elem.style.width = this.width;
      }
      catch(Err){
        console.log("deu erro");
        console.log(Err);
      }
    }
  }
}
