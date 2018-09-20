import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'settings-btn',
  templateUrl: './settings-btn.component.html',
  styleUrls: ['./settings-btn.component.css']
})
export class SettingsBtnComponent implements OnInit {

  public open: Boolean = false;
  public animated: Boolean = true;
  constructor() {

   }

  ngOnInit() {

  }

  setOpen(){
    this.open = !this.open;
    this.animated = false;
    setInterval(
      ()=>{
        this.animated = true;
      },
      1000
    )
  }

}
