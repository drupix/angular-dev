import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent {

  constructor(private router: Router) { }

  // ngOnInit(): void {
  // }

  navigateOnParent(): void {
    this.router.navigate(['/reactive-form']);
  }

}
