import { Component } from '@angular/core';
import { ITEMS } from './modules/application/example-bootstrap-prototype/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dev';
  // title = 'angular-dev app is running!';
  version = 'Angular version 10.1.6';
  bs_items = ITEMS;
}
