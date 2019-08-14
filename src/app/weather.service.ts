import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Capability } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = "aed73584092b30159cb471ac0c3c9bf5";
  url = "";
  constructor(private http:HttpClient) {
    this.url='http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
   }

   getWeather(city: string) {
     return this.http.get(this.url +city+'&APPID='+this.apiKey);
     }
   }

