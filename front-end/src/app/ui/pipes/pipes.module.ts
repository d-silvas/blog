import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FinancialNumberPipe } from './financial-number.pipe';



@NgModule({
  declarations: [FinancialNumberPipe],
  providers: [DecimalPipe],
  imports: [
    CommonModule,
  ],
  exports: [FinancialNumberPipe]
})
export class PipesModule { }
