import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { NavComponent } from './modules/general/nav/nav.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// Lazy load
//
// import { ContactComponent } from './modules/general/contact/contact.component';
// import { AboutComponent } from './modules/general/about/about.component';
// import { SigninComponent } from './modules/general/auth/signin/signin.component';
// import { SignupComponent } from './modules/general/auth/signup/signup.component';
//
// END Lazy load
import { AppRoutingModule } from './app-routing.module';
// import { MailingModule } from './modules/general/contact/mailing/mailing.module';
// import { MailingComponent } from './modules/general/contact/mailing/mailing.component';
// import { MapModule } from './modules/general/contact/map/map.module';
// import { MapComponent } from './modules/general/contact/map/map.component';

// import { ContactModule } from './modules/general/contact/contact.module';
// import { AboutModule } from './modules/general/about/about.module';
// import { SigninModule } from './modules/general/auth/signin/signin.module';
// import { SignupModule } from './modules/general/auth/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent,
    // NavComponent,
    HomeComponent,
    NotFoundComponent,
    // MailingComponent,
    // MapComponent,
    // ContactComponent,
    // AboutComponent,
    // SigninComponent
    // SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MailingModule,
    // MapModule,
    // ContactModule,
    // AboutModule,
    // SigninModule,
    // SigupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
