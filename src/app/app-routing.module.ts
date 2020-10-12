import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
// import { AboutComponent } from './modules/general/about/about.component';
// import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
// import { SigninComponent } from './modules/general/auth/signin/signin.component';
// import { SignupComponent } from './modules/general/auth/signup/signup.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  // { path: 'contact', component: ContactComponent },

  // Lazy load
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module').then(mod => mod.ContactModule)
  },
  // { path: 'about', component: AboutComponent },

  // Lazy load
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module').then(mod => mod.AboutModule)
  },
  // { path: 'signin', component: SigninComponent },

  // Lazy load
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/auth/signin/signin.module').then(mod => mod.SigninModule)
  },
  // { path: 'signup', component: SignupComponent },

  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/application/components/components.module')
      .then(mod => mod.ComponentsModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./modules/application/services/services.module')
      .then(mod => mod.ServicesModule)
  },
  {
    path: 'httpclient',
    loadChildren: () => import('./modules/application/items/items.module')
      .then(mod => mod.ItemsModule)
  },

  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
    // CommonModule
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
