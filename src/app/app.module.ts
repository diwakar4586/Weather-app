import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { WeatherComponent } from './weather/weather.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CloudsComponent } from './clouds/clouds.component';
// import { ForcastComponent } from './forcast/forcast.component';

@NgModule({
  declarations: [
    AppComponent,
    // WeatherComponent,
    WeatherCityComponent,
    HeaderComponent,
    CloudsComponent,
    // ForcastComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
