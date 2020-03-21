import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: any;

  constructor(private http: HttpClient) { }

  loadConfig(){
    return this.http
      .get<any>('../../assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }
}
