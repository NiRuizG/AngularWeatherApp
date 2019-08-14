import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {WeatherService} from "../weather.service";
import {cities} from "../../car"
import { NgModule } from '@angular/core';
import { splitClasses } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template : '<div class="container"></div><div class="inputs"><input class="input1" placeholder ="ex: Paris" type="text" name="Fname" [(ngModel)]="newCity"><input class="input2" placeholder ="ex:FR" type="text" name="Fname" [(ngModel)]="newCityCountry">  <button  (click)="addCity()" class="button" >add</button></div><div class="infos"><div class ="city {{city.name}}.{{city.sys.country}}" id="{{city}}" *ngFor="let city of locObjs" #{{refEl}} (click)="deleteDiv(city.name)"><p>{{city.name}}<img class="wicon" src="http://openweathermap.org/img/w/{{city.weather[0].icon}}.png" alt="Weather icon"></p><img class="CountryIcon" src="https://www.countryflags.io/{{city.sys.country}}/shiny/64.png"> <div>temp°: {{city.main.temp}} °C</div><div>humidity: {{city.main.humidity}}%</div></div></div>'
})
export class HomeComponent implements OnInit {
  constructor(private _weatherService:WeatherService) { }
  location= [
   "london",
    "testFalse"
  ];
  newCity = '';
  newCityCountry = '';
  temp = '';
  locObjs = []
  public city: cities[];
  weather:any;
  iconurl = "";
  widget = '<div class="container"></div><div class="inputs"><input class="input1" placeholder ="ex: Paris" type="text" name="Fname" [(ngModel)]="newCity"><input class="input2" placeholder ="ex:FR" type="text" name="Fname" [(ngModel)]="newCityCountry">  <button  (click)="addCity()" class="button" >add</button></div><div class="infos"><div class ="city {{city.name}}.{{city.sys.country}}" id="{{city}}" *ngFor="let city of locObjs" #{{refEl}} (click)="deleteDiv(city.name)"><p>{{city.name}}<img class="wicon" src="http://openweathermap.org/img/w/{{city.weather[0].icon}}.png" alt="Weather icon"></p><img class="CountryIcon" src="https://www.countryflags.io/{{city.sys.country}}/shiny/64.png"> <div>temp°: {{city.main.temp}} °C</div><div>humidity: {{city.main.humidity}}%</div></div></div>'


  deleteDiv(cityName: string) {
    for (let i = 0; this.locObjs[i]; i++)
      if (this.locObjs[i].name === cityName) {
        this.locObjs.splice(i, 1);
    }
  }  
  checkCity(city: string, cityTab) {
    for (let i = 0; cityTab[i]; i++)
      if (city.toUpperCase() === cityTab[i].name.toUpperCase())
        return 0;
    return 1;  
  }
  addCity() {
  if (this.newCityCountry != "")
    this.temp = "," + this.newCityCountry;
  if (this.checkCity(this.newCity, this.locObjs) === 1)
    this.location.push(this.newCity + this.temp);  
  this.ngOnInit();
  }
  ngOnInit() {
    for (let loc of this.location) {
      this._weatherService.getWeather(loc).subscribe((response)=>{
        this.locObjs.push(response);
    });
  }
  while (this.location[0]) {
    this.location.splice(0, 1);
  }
}
}
