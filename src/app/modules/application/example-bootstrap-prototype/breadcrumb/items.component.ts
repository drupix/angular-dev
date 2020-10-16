import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class BreadcrumbComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateOnParent() {
    this.router.navigate(['/bootstrap-prototype']);
  }

}
