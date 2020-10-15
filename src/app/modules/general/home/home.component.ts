import { Component, OnInit } from '@angular/core';
import { FEATURES } from '../features';
import { Meta, Title } from '@angular/platform-browser';
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

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title) {
    this.features = FEATURES;
  }

  ngOnInit(): void {
    this.titleService.setTitle('AngularDev - drupal-solutions.ch: Une Application Web avec Angular - Merci danny!');
    this.meta.addTag({
      name: 'angular.drupal-solutions',
      content: 'enzo di resta'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 10.1.3 et bootstrap 4.5.2' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }

}
