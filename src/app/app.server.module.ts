import { NgModule } from '@angular/core';
//  Transfer State
// import { ServerModule } from '@angular/platform-server';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'angular-dev' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
