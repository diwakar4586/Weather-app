import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.api';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent implements OnInit {
  weatherData: any;
  forecastData: any;
  location: string = 'Patiala';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(): void {
    this.weatherService.getWeather(this.location).subscribe(
      data => {
        // console.log(data); 
        this.weatherData = data;
        this.get14DayForecast(); 
      },
      error => console.error(error)
    );
  }

  get14DayForecast(): void {
    this.weatherService.get14DayForecast(this.location).subscribe(
      data => {
        this.forecastData = data.forecast.forecastday;
      },
      error => console.error(error)
    );
  }
}
