import { Component } from '@angular/core';
import { BOOTSTRAP_ITEMS } from '../items';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  items = BOOTSTRAP_ITEMS;
}
