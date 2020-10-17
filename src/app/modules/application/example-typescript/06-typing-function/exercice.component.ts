import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { showmessage } from './showmessage';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  result: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.result = 'Call function' + ' ' + showmessage('param1');
  }

  navigateOnParent(): void {
    this.router.navigate(['/typescript']);
  }

}
