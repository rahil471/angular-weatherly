import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aw-thumbnail',
  templateUrl: './aw-thumbnail.component.html',
  styleUrls: ['./aw-thumbnail.component.css']
})
export class AwThumbnailComponent implements OnInit {
  @Input() city; //tell Angular 2 that city is an input property
  @Output() handleClickinParent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleClick(city){
    this.handleClickinParent.emit(city);
    alert(city.name);
  }

}
