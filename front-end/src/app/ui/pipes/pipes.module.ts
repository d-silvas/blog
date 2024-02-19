import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { StripHtmlPipe } from './strip-html.pipe';

@NgModule({
  declarations: [SafeHtmlPipe, StripHtmlPipe],
  imports: [CommonModule],
  exports: [SafeHtmlPipe, StripHtmlPipe],
})
export class PipesModule {}
