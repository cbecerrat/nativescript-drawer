import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule, NSEmptyOutletComponent } from '@nativescript/angular';
import { HomeDefault } from './default/home-default.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: '/(browseTab:home/browse//searchTab:home/search)',
      },
      {
        path: 'default',
        component: HomeDefault,
        outlet: 'homeTab',
      },
      {
        path: 'browse',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/browse/browse.module').then((m) => m.BrowseModule),
        outlet: 'browseTab',
      },
      {
        path: 'search',
        component: NSEmptyOutletComponent,
        loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
        outlet: 'searchTab',
      },
    ]
  }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {

}
