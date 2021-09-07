import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { HomeDefault } from './default/home-default.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HomeDefault
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule { }
