import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class DropdownsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateOnParent(): void {
    this.router.navigate(['/bootstrap-prototype']);
  }

}
