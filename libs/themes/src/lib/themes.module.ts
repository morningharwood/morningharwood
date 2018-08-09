import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NightOwlModule } from './night-owl/night-owl.module';


@NgModule({
  imports: [
    CommonModule,
    NightOwlModule
  ]
})
export class ThemesModule {
}
