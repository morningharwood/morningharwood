import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainNavigationComponent } from './main-navigation.component';
import { RouterModule } from '@angular/router';


export const IMPORTS = [
  CommonModule,
  RouterModule
];

@NgModule({
  declarations: [ MainNavigationComponent ],
  imports: IMPORTS,
  exports: [ MainNavigationComponent ]
})
export class MainNavigationModule {
}
