import {
  BrowserModule,
  BrowserTransferStateModule
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { webchannel } from '@firebase/webchannel-wrapper';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NxModule } from '@nrwl/nx';
import { FirebaseModule } from '../../../../libs/firebase/src';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PostHeaderModule } from '../../../../libs/portfolio/src/lib/post-header/post-header.module';
import { MainNavigationModule } from '../../../../libs/portfolio/src/lib/main-navigation/main-navigation.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserTransferStateModule,
    FirebaseModule,
    RouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NxModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PostHeaderModule,
    MainNavigationModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


// @ts-ignore
// global.thing = allComponents;
