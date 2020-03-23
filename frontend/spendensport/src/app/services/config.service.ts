import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig } from '../models/IConfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: IConfig;

  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http
      .get<IConfig>('../assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }
}
