import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popovers',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class PopoversComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadScript('./assets/params/js/popovers.js');
  }

  navigateOnParent() {
    this.router.navigate(['/bootstrap-prototype']);
  }

  loadScript(name: string): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = name;
    s.async = false;
    document.getElementsByTagName('head')[0].appendChild(s);
  }

}
