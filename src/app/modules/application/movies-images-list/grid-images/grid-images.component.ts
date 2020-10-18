import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-images',
  templateUrl: './grid-images.component.html',
  styleUrls: ['./grid-images.component.scss']
})
export class GridImagesComponent {

  @Input() items: any;
  @Input() columns: any;
  @Input() link: any;
  @Input() filter: any;
  @Input() itemsCount: any;
  @Input() pagination: any;

  constructor(public router: Router) { }

  selectItem(id: any): void {
    console.log('this.router.navigate ->' + '/crud/' + this.link) ;
    console.log('this.router.navigate ->' + 'id = ' + id) ;
    this.router.navigate(['/crud/' + this.link, id]);
  }

}
