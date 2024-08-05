import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { PipesModule } from './pipes/pipes.module';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MathJaxDirective } from './mathjax/mathjax.directive';

@NgModule({
  declarations: [
    TopbarComponent,
    CardComponent,
    PaginatorComponent,
    MathJaxDirective,
  ],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    PipesModule,
    TopbarComponent,
    CardComponent,
    PaginatorComponent,
    MathJaxDirective,
  ],
})
export class UiModule {}
