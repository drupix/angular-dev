import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateOnParent(): void {
    this.router.navigate(['/typescript']);
  }

}
