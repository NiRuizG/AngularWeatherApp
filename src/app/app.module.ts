import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WeatherService} from './weather.service';
import {RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';


const appRoutes=[
  {path: '', component: HomeComponent},{path:'setting', component:SettingComponent}, {path:'home', component:HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent
  ],
  imports: [
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes ),
    HttpClientModule
  ],
  providers: [WeatherService, HomeComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
