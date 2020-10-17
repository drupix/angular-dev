import { Component } from '@angular/core';
import { TYPESCRIPT_ITEMS } from '../items';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  items = TYPESCRIPT_ITEMS;
}
