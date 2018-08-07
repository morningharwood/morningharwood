import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostHeaderComponent } from '@morningharwood/portfolio/src/lib/post-header/post-header.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [PostHeaderComponent],
  exports: [PostHeaderComponent],
})
export class PostHeaderModule { }
