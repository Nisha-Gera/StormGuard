import { Component, OnInit } from '@angular/core';
import { APIService } from './weather.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  TodayDate: Date;
  weatherData: any = {};
  isLocationVisible = false;
  error:string = '';

  constructor(private apiService: APIService) {
    this.TodayDate = new Date();
  }

  ngOnInit(): void {
    console.log('Home component initialized');
  }

  getWeatherDataByCity() {
    let city = (document.getElementById('cityName') as HTMLInputElement).value;
    if (city == ''){
      this.error = "Please enter a valid City Name"
    } else{
      this.error='';
    this.isLocationVisible = this.isLocationVisible ==true?false:true;
    this.apiService.getWeatherData(city).subscribe((data) => {
      this.weatherData = data;
      city = ' '
         }); }
  }
  
  Clear(inputForm: NgForm) {
    inputForm.reset({ city: ' ' }); // Reset the form
    this.weatherData = {}; // Clear the weather data
    this.isLocationVisible = false;
    // this.city = ' ';
  }
  
}
