import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService implements OnInit {
  apiKey = 'fa2f6b02bc71cc4a87caedfbeb8913f2';
  // city =' ';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  getWeatherData(city:string) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
    };
   
    
  }

