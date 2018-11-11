import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderModule } from './post-header/post-header.module';
import { MainNavigationModule } from './main-navigation/main-navigation.module';


@NgModule({
  imports: [
    CommonModule,
    PostHeaderModule,
    MainNavigationModule
  ]
})
export class PortfolioModule {
}
