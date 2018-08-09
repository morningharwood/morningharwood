import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NxModule } from '@nrwl/nx';
import { FirebaseModule } from '../../../../libs/firebase/src';
import { SomeOtherComponent } from './someOther.component';



@NgModule({
  declarations: [
    AppComponent,
    SomeOtherComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserTransferStateModule,
    FirebaseModule,
    RouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
