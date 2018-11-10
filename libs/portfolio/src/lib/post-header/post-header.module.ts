import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderComponent } from './post-header.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PostHeaderComponent ],
  exports: [ PostHeaderComponent ]
})
export class PostHeaderModule {
}
