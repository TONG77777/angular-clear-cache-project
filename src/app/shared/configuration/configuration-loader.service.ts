import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

import { Configuration } from './configuration';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationLoader {
  private http: HttpClient;
  private CONFIGURATION_URL = environment.configurationUrl;

  private configuration: Configuration;

  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  loadConfiguration(): Promise<any> {
    return this.http
      .get(this.CONFIGURATION_URL)
      .toPromise()
      .then((configuration: Configuration) => {
        this.configuration = configuration;
        return configuration;
      });
  }

  getConfiguration(): Configuration {
    return this.configuration;
  }
}
