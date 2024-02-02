import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { PipesModule } from './pipes/pipes.module';
import { TopbarComponent } from './topbar/topbar.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [TopbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    // I believe the following works because we have provided
    // HttpClientModule in AppModule
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
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
    MarkdownModule,
  ],
})
export class UiModule {}
