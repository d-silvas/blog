import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { PipesModule } from './pipes/pipes.module';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [TopbarComponent, CardComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    PipesModule,
    TopbarComponent,
    CardComponent,
  ],
})
export class UiModule {}
