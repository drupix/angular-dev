import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
// Lazy load
//
// import { ContactComponent } from './modules/general/contact/contact.component';
// import { AboutComponent } from './modules/general/about/about.component';
// import { SigninComponent } from './modules/general/auth/signin/signin.component';
// import { SignupComponent } from './modules/general/auth/signup/signup.component';
// import { ItemsComponent } from './modules/application/items/items.component';
// import { ItemsModule } from './modules/application/items/items.module';
// import { ComponentsComponent } from './modules/application/components/components.component';
// import { ComponentsModule } from './modules/application/components/components.module';
// import { ServicesComponent } from './modules/application/services/services.component';
// import { ServicesModule } from './modules/application/services/services.module';
// import { TemplateDrivenFormsComponent } from './modules/application/template-driven-forms/template-driven-forms.component';
// import { TemplateDrivenFormsModule } from './modules/application/template-driven-forms/template-driven-forms.module';
// import { ChartjsComponent } from './modules/application/chartjs/chartjs.component';
// import { ChartjsModule } from './modules/application/chartjs/chartjs.module';
//
// END Lazy load
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    HomeComponent,
    NotFoundComponent,
    // MailingComponent,
    // MapComponent,
    // ContactComponent,
    // AboutComponent,
    // SigninComponent
    // SignupComponent,
    // ItemsComponent,
    // ComponentsComponent,
    // ServicesComponent,
    // TemplateDrivenFormsComponent,
    // ChartjsComponent,
  ],
  imports: [
    // Transfer State
    // BrowserModule.withServerTransition({ appId: 'angular-dev' }),
    BrowserModule,
    AppRoutingModule,
    // MailingModule,
    // MapModule,
    // ContactModule,
    // AboutModule,
    // SigninModule,
    // SigupModule,
    // ItemsModule,
    HttpClientModule,
    // ComponentsModule
    // ServicesModule,
    // TemplateDrivenFormsModule,
    // ChartjsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
