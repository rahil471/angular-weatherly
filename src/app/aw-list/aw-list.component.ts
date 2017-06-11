import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aw-list',
  templateUrl: './aw-list.component.html',
  styleUrls: ['./aw-list.component.css']
})
export class AwListComponent implements OnInit {
  city: any;
  constructor() { }

  ngOnInit() {
    this.city = {
      "coord": {
        "lon": -0.13,
        "lat": 51.51
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "base": "stations",
      "main": {
        "temp": 286.33,
        "pressure": 1017,
        "humidity": 71,
        "temp_min": 286.15,
        "temp_max": 287.15
      },
      "visibility": 10000,
      "wind": {
        "speed": 4.1,
        "deg": 240
      },
      "clouds": {
        "all": 0
      },
      "dt": 1496559000,
      "sys": {
        "type": 1,
        "id": 5091,
        "message": 0.0041,
        "country": "GB",
        "sunrise": 1496547996,
        "sunset": 1496607109
      },
      "id": 2643743,
      "name": "London",
      "cod": 200
    }
  }

  handleClickinParent(city){
    console.log(city)
  }
}
