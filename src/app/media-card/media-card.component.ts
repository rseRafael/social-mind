import { Component, OnInit, Input } from '@angular/core';

interface Media{
  link: string;
  startdate: string;
  enddate: string;
}


@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {
  @Input() content: Array<Media> = [];

  constructor(){ 
    
  }

  ngOnInit(){

  }

}
