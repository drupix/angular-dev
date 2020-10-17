import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-builder',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css'],
})
export class ExerciceComponent implements OnInit {

  exampleForm = this.fb.group({
    name: [''],
    releaseDate: [''],
    franchise: [''],
    budget: [''],
    worldwide: [''],
    summary: [''],
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.updateControls();
  }

  navigateOnParent(): void {
    this.router.navigate(['/reactive-form']);
  }

  updateControls(): void {
    this.exampleForm.patchValue({
      name: 'Avengers: Endgame',
      releaseDate: '26/04/2019',
      franchise: true,
      budget: 356000000,
      worldwide: 2797800564,
      summary: 'After the devastating events of Avengers: Infinity War (2018), ' +
        'the universe is in ruins.'
    });
  }

  resetControls(): void {
    this.exampleForm.patchValue({
      name: null,
      releaseDate: null,
      franchise: true,
      budget: null,
      worldwide: null,
      summary: null,
    });
  }


}
