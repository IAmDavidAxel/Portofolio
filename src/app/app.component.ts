import { Component } from '@angular/core';
import {NgsRevealConfig} from 'ngx-scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portofolio';

  constructor(config: NgsRevealConfig) {
    config.duration = 2000;
    config.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config.reset = true;
  }
}










