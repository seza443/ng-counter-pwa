import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTES_PATH } from './app.routes';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { NotFoundPageComponent } from '../pages/not-found-page/not-found-page.component';

const ROUTES: Routes = [
  {path: ROUTES_PATH.COUNTER_LIST, component: HomePageComponent},
  {path: ROUTES_PATH.HOME, component: HomePageComponent},
  {path: ROUTES_PATH.NOT_FOUND, component: NotFoundPageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {
        onSameUrlNavigation: 'reload',
        // enableTracing: true  // debug only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
