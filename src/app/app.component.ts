import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renderer2 } from '@angular/core';
import { BOOTSTRAP_ITEMS } from './modules/application/example-bootstrap-prototype/items';
import { TYPESCRIPT_ITEMS } from './modules/application/example-typescript/items';

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
      // elements: [
      //   { name: 'Modules', link: 'typescript/modules' },
      //   { name: 'Interfaces', link: 'typescript/interfaces' },
      //   { name: 'Classes', link: 'typescript/classes' },
      //   { name: 'Functions', link: 'typescript/functions' },
      //   { name: 'Types', link: 'typescript/types' },
      //   { name: 'Typing-function', link: 'typescript/typing-function' },
      // ]
    },
    {
      name: 'Bootstrap prototype', link: 'bootstrap-prototype',
        elements: BOOTSTRAP_ITEMS,
      // elements: [
      //   { name: 'Alerts', link: 'bootstrap-prototype/alerts' },
      //   { name: 'Badge', link: 'bootstrap-prototype/badge' },
      //   { name: 'Blockquotes', link: 'bootstrap-prototype/blockquotes' },
      //   { name: 'Breadcrumb', link: 'bootstrap-prototype/breadcrumb' },
      //   { name: 'Buttons', link: 'bootstrap-prototype/buttons' },
      //   { name: 'Collapse', link: 'bootstrap-prototype/collapse' },
      //   { name: 'Dropdowns', link: 'bootstrap-prototype/dropdowns' },
      //   { name: 'Forms', link: 'bootstrap-prototype/forms' },
      //   { name: 'List-group', link: 'bootstrap-prototype/list-group' },
      //   { name: 'Modal', link: 'bootstrap-prototype/modal' },
      //   { name: 'Pagination', link: 'bootstrap-prototype/pagination' },
      //   { name: 'Popovers', link: 'bootstrap-prototype/popovers' },
      //   { name: 'Progress', link: 'bootstrap-prototype/progress' },
      //   { name: 'Spinners', link: 'bootstrap-prototype/spinners' },
      //   { name: 'Toasts', link: 'bootstrap-prototype/toasts' },
      //   { name: 'Tooltips', link: 'bootstrap-prototype/tooltips' },
      // ]
    },
    {
      name: 'TODO: Features', link: 'Features',
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
      name: 'TODO: Reactive Form', link: 'reactive-form',
      elements: [
        { name: 'TODO: Prototype', link: 'reactive-form/prototype' },
        { name: 'TODO: Form control', link: 'reactive-form/form-control' },
        { name: 'TODO: Form control class', link: 'reactive-form/form-control-class' },
        { name: 'TODO: Form group', link: 'reactive-form/form-group' },
        { name: 'TODO: Form builder', link: 'reactive-form/form-builder' },
        { name: 'TODO: Form builder nested', link: 'reactive-form/form-builder-nested' },
        { name: 'TODO: Form array', link: 'reactive-form/form-array' },
        { name: 'TODO: Form multi', link: 'reactive-form/form-multi' },
      ]
    },
    {
      name: 'TODO: CRUD', link: 'crud',
      elements: [
        { name: 'TODO: Continents', link: 'crud/continents' },
        { name: 'TODO: Countries', link: 'crud/countries' },
        { name: 'TODO: Cities', link: 'crud/cities' },
        { name: 'TODO: Shows', link: 'crud/shows' },
        { name: 'TODO: Shows images', link: 'crud/shows-images' },
        { name: 'TODO: Movies', link: 'crud/movies' },
        { name: 'TODO: Movies images', link: 'crud/movies-images' },
      ]
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
