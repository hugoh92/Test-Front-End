import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface WeatherData { //interface data
  temp: number;
  description: string;
  icon: string;
}
@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: ['./test-three.component.css']
})
export class TestThreeComponent implements OnInit {
  cityName: string = 'London';
  weatherData: WeatherData | null = null;
  weatherIcon: string = '';
  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.getWeather();
  }
  async getWeather() {
    try {//Call api
      const response = await this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=7a404576651eb71fdb74546d9f79ccb0&units=metric`).toPromise();
      this.weatherData = {
        temp: response.main.temp,
        description: response.weather[0].description,
        icon: response.weather[0].icon
      };
      this.setWeatherIcon(); //Call the method to set the weather image
    } catch (error) {
      console.error('Erro ao buscar dados do clima:', error);
      this.weatherData = null;
    }
  }
  //if city not found
  cityNotFound() {
    return this.weatherData === null;
  }

  // set weather image name based on weather conditions
  setWeatherIcon() {
    switch (this.weatherData?.icon) {
      case '01d':
        this.weatherIcon = 'clear.png';
        break;
      case '02d':
      case '03d':
      case '04d':
        this.weatherIcon = 'clouds.png';
        break;
      case '09d':
      case '10d':
        this.weatherIcon = 'rain.png';
        break;
      default:
        this.weatherIcon = 'default.png';
        break;
    }
  }

}
