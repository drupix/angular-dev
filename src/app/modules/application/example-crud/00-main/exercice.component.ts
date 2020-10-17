import { Component } from '@angular/core';
import { CRUD_ITEMS } from '../items';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent {
  items = CRUD_ITEMS;
}
