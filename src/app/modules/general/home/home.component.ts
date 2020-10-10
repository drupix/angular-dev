import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  node = environment.application.node;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  constructor() { }

  ngOnInit(): void {
  }

}
