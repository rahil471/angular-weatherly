import { Component, OnInit } from '@angular/core';

import { AwListService } from './shared/aw-list.service';

@Component({
  selector: 'app-aw-list',
  templateUrl: './aw-list.component.html',
  styleUrls: ['./aw-list.component.css']
})
export class AwListComponent implements OnInit {
  cities: any;
  constructor(private awlistservice: AwListService) { }

  ngOnInit() {
    this.cities = this.awlistservice.getCities();  
  }
}
