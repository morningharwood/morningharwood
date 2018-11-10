import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderModule } from './post-header/post-header.module';


@NgModule({
  imports: [
    CommonModule,
    PostHeaderModule
  ]
})
export class PortfolioModule {
}
