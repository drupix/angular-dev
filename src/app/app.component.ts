import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { BOOTSTRAP_ITEMS } from './modules/application/example-bootstrap-prototype/items';
import { TYPESCRIPT_ITEMS } from './modules/application/example-typescript/items';
import { REACTIVEFORM_ITEMS } from './modules/application/example-reactive-form/items';
import { CRUD_ITEMS } from './modules/application/example-crud/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-dev';
  // title = 'angular-dev app is running!';
  version = 'Angular version 10.1.6';
  // bsItems = ITEMS;

  items = [
    {
      name: 'Typescript', link: 'typescript',
        elements: TYPESCRIPT_ITEMS,
    },
    {
      name: 'Bootstrap prototype', link: 'bootstrap-prototype',
        elements: BOOTSTRAP_ITEMS,
    },
    {
      name: 'Features', link: 'Features',
        elements: [
          { name: 'Components', link: 'components' },
          { name: 'Services', link: 'services' },
          { name: 'HttpClient', link: 'httpclient' },
          { name: 'Template-driven Forms', link: 'template-driven-forms' },
          { name: 'Charts', link: 'charts' },
          { name: 'Leaflet', link: 'leaflet' },
          { name: 'TODO: Movie list', link: 'movies-images-list' },


        ]
    },
    {
      name: 'Reactive Form', link: 'reactive-form',
        elements: REACTIVEFORM_ITEMS,
    },
    {
      name: 'CRUD', link: 'crud',
        elements: CRUD_ITEMS,
    },
  ];

  constructor(
    public router: Router,
    public renderer: Renderer2) { }

  // onSelectMenu(link: any): void {
  //   const element = document.getElementById('bd-docs-nav');
  //   this.renderer.removeClass(element, 'show');
  //   const route = '/' + link;
  //   this.router.navigate([route]);
  // }
}
