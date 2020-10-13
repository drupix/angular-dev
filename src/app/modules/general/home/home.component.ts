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

  features: any;

  constructor() {
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
        icon: 'fas fa-share-alt-square',
        link: 'components'
      },
      {
        name: 'Services',
        description: 'A great way to share information among classes - Use services to view a playlist and a youtube player',
        icon: 'fas fa-address-card',
        link: 'services'
      },
      {
        name: 'Template Driven Form',
        description: 'Create Template Driven Form - Forms are the mainstay of business applications',
        icon: 'fas fa-comment-alt',
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
        icon: 'fab fa-bootstrap',
        link: 'httpclient'
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
  }

}
