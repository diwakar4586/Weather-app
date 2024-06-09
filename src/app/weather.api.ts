import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json?key=a22146874ee84d5ebfc124339240606&q=';
  private apiKey = 'a22146874ee84d5ebfc124339240606'; 
  private forecastUrl = 'http://api.weatherapi.com/v1/forecast.json?key=';

  constructor(private http: HttpClient) { }

  getWeather(location: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${location}`);
  }

  get14DayForecast(location: string): Observable<any> {
    const url = `${this.forecastUrl}${this.apiKey}&q=${location}&days=14`;
    return this.http.get(url);
  }
}
