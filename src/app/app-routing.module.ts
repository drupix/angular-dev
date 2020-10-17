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
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module').then(mod => mod.ContactModule)
  },
  // { path: 'about', component: AboutComponent },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module').then(mod => mod.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/auth/signin/signin.module').then(mod => mod.SigninModule)
  },
  {
    path: 'bootstrap-prototype',
    loadChildren: () => import('./modules/application/example-bootstrap-prototype/example-bootstrap-prototype.module')
      .then(mod => mod.ExampleBootstrapPrototypeModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./modules/application/example-typescript/tutorial.module')
      .then(mod => mod.TutorialModule)
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
  {
    path: 'template-driven-forms',
    loadChildren: () => import('./modules/application/template-driven-forms/template-driven-forms.module')
      .then(mod => mod.TemplateDrivenFormsModule)
  },
  {
    path: 'chartjs',
    loadChildren: () => import('./modules/application/chartjs/chartjs.module')
      .then(mod => mod.ChartjsModule)
  },
  {
    path: 'leaflet',
    loadChildren: () => import('./modules/application/leaflet/leaflet.module')
      .then(mod => mod.LeafletModule)
  },
  {
    path: 'movies-images-list',
    loadChildren: () => import('./modules/application/movies-images-list/movies-images-list.module')
      .then(mod => mod.MoviesImagesListModule)
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
