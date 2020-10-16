import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateOnParent(): void {
    this.router.navigate(['/bootstrap-prototype']);
  }

}
