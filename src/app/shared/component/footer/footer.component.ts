import { Component, OnInit } from '@angular/core';
import { ConfigurationLoader } from '../../configuration/configuration-loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  ABCVersion = this.configurationLoader.getConfiguration().VERSION.ABC;
  DEFVersion = this.configurationLoader.getConfiguration().VERSION.DEF;
  PRODVersion = this.configurationLoader.getConfiguration().VERSION.PROD;

  abcShieldUrl: string;
  defShieldUrl: string;
  prodShieldUrl: string;

  constructor(private configurationLoader: ConfigurationLoader) {}

  ngOnInit(): void {
    this.abcShieldUrl = `https://img.shields.io/badge/ABC-v${this.ABCVersion}-limegreen`;
    this.defShieldUrl = `https://img.shields.io/badge/DEF-v${this.DEFVersion}-limegreen`;
    this.prodShieldUrl = `https://img.shields.io/badge/PROD-v${this.PRODVersion}-blue`;
  }
}
