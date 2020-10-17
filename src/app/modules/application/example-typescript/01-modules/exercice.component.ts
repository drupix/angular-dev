import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { functionExport1 } from './functions';
import { function1 } from './functions';
import { function2, function3 } from './functions';

import { variableExport10 } from './variables';
import { variable10 } from './variables';
import { variable20 } from './variables';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  testFunction: string;
  testVariable: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.testFunction = functionExport1('without using as') + '<br>' +
      function1('with using as') + '<br>' +
      function2() + '<br>' +
      function3();

    this.testVariable = variableExport10 + '<br>' +
      variable10 + '<br>' +
      variable20;
  }

  navigateOnParent(): void {
    this.router.navigate(['/typescript']);
  }

}
