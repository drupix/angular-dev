import { Component } from '@angular/core';
import { REACTIVEFORM_ITEMS } from '../items';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent {
  items = REACTIVEFORM_ITEMS;
}
