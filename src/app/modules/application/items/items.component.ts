import { Component, OnInit } from '@angular/core';

// Transfer State
// import { isPlatformBrowser } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';

//
import { ItemsService } from './items.service';

// Transfer State
const STATE_KEY_ITEMS = makeStateKey('items');


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  // items: any;
  items: any = [];
  loaded: boolean;
  constructor(
    private state: TransferState,
    private itemsService: ItemsService,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
  }

  ngOnInit(): void {
    // console.log(`onInit -> this.items: Length = ${this.items.length}`);
    // console.log(this.items);
    this.getUsers();
  }

  getUsers(): void {
    this.loaded = false;

    this.items = this.state.get(STATE_KEY_ITEMS, <any> []);
    // console.log(`this.items: Length = ${this.items.length}`);
    // console.log(this.items);
    if (this.items.length === 0) {
      this.itemsService.getItems('https://jsonplaceholder.typicode.com/users')
        .subscribe(
          items => {
            // const platform = isPlatformBrowser(this.platformId) ? 'in the browser' : 'on the server';
            // console.log(`getUsers : Running ${platform} with appId=${this.appId}`);
            this.items = items;
            this.loaded = true;
            this.state.set(STATE_KEY_ITEMS, <any> items);
          });
    }
    else {
      this.loaded = true;
    }
  }

  resetUsers(): void {
    this.items = null;
    this.loaded = true;
  }

}
