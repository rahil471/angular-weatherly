import {Injectable} from "@angular/core";


export class AwListService {
    getCities(){
        return [{
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
            },{
        "coord": {
            "lon": 72.85,
            "lat": 19.01
        },
        "weather": [
            {
            "id": 201,
            "main": "Thunderstorm",
            "description": "thunderstorm with rain",
            "icon": "11d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 299.15,
            "pressure": 1004,
            "humidity": 94,
            "temp_min": 299.15,
            "temp_max": 299.15
        },
        "visibility": 3000,
        "wind": {
            "speed": 7.2,
            "deg": 310
        },
        "clouds": {
            "all": 90
        },
        "dt": 1497164400,
        "sys": {
            "type": 1,
            "id": 7770,
            "message": 0.004,
            "country": "IN",
            "sunrise": 1497141035,
            "sunset": 1497188767
        },
        "id": 1275339,
        "name": "Mumbai",
        "cod": 200
        },{
        "coord": {
            "lon": 151.21,
            "lat": -33.87
        },
        "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 290.15,
            "pressure": 1025,
            "humidity": 88,
            "temp_min": 290.15,
            "temp_max": 290.15
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.1,
            "deg": 20
        },
        "clouds": {
            "all": 75
        },
        "dt": 1497164400,
        "sys": {
            "type": 1,
            "id": 8233,
            "message": 0.0023,
            "country": "AU",
            "sunrise": 1497128206,
            "sunset": 1497163968
        },
        "id": 2147714,
        "name": "Sydney",
        "cod": 200
        },{
        "coord": {
            "lon": 101.69,
            "lat": 3.14
        },
        "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 306.61,
            "pressure": 1009,
            "humidity": 52,
            "temp_min": 306.15,
            "temp_max": 307.15
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.1,
            "deg": 210
        },
        "clouds": {
            "all": 75
        },
        "dt": 1497164400,
        "sys": {
            "type": 1,
            "id": 8138,
            "message": 0.0042,
            "country": "MY",
            "sunrise": 1497135834,
            "sunset": 1497180120
        },
        "id": 1733046,
        "name": "Kuala Lumpur",
        "cod": 200
        }];
    }
}