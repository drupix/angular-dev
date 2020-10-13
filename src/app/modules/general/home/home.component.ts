import { Component, OnInit } from '@angular/core';
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
    this.features = [
      {
        name: 'Bootstrap prototype',
        description: 'Bootstrap Prototype , Badges, Buttons, Collapse, Popovers, Toasts, Tooltips',
        icon: 'fab fa-bootstrap',
        link: 'bootstrap-prototype'
      },
      {
        name: 'Reactiveform',
        description: 'TODO: Create Reactive Form',
        icon: 'fas fa-comment-alt',
        link: 'reactiveform'
      },
      {
        name: 'Components',
        description: 'Define and control views - Smartphone Component with Input, Output and Event Emitter',
        icon: 'fas fa-tools',
        link: 'components'
      },
      {
        name: 'Services',
        description: 'A great way to share information among classes - Use services to view a playlist and a youtube player',
        icon: 'fab fa-youtube',
        link: 'services'
      },
      {
        name: 'Template Driven Form',
        description: 'Create Template Driven Form - Forms are the mainstay of business applications',
        icon: 'fab fa-wpforms',
        link: 'template-driven-forms'
      },
      // Replaced by Items
      // {
      //   name: 'HttpClient',
      //   description: 'HttpClient',
      //   icon: 'fa-comment-alt',
      //   link: 'httpclient'
      // },

      // Items replaces HttpClient
      {
        name: 'HttpClient',
        description: 'Use an external API with the HttpClient module',
        icon: 'fas fa-project-diagram',
        link: 'httpclient'
      },

      {
        name: 'Chart.js',
        description: 'Simple yet flexible JavaScript charting for designers & developers',
        icon: 'fas fa-chart-bar',
        link: 'chartjs'
      },

      // {
      //   name: 'Directives',
      //   description: 'Change the appearance or behavior of a DOM element',
      //   icon: 'fa-text-width',
      //   link: 'directives'
      // },
      // {
      //   name: 'Pipes',
      //   description: 'Write display-value transformations',
      //   icon: 'fa-code',
      //   link: 'pipes'
      // },
      // {
      //   name: 'RxJS/Observables',
      //   description: 'Provide support for passing messages between publishers and subscribers',
      //   icon: 'fa-comment-alt',
      //   link: 'observables'
      // },
      // {
      //   name: 'modal',
      //   description: 'Add dialogs to your site',
      //   icon: 'fa-comment-alt',
      //   link: 'modal'
      // },
    ];
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
