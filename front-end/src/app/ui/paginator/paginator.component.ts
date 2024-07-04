import { Component, input, output } from '@angular/core';
import { PageEvent } from './page-event';

/**
 * @TODO
 */
@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
})
export class PaginatorComponent {
  pageIndex = input.required<number | null>();
  pageSize = input.required<number | null>();
  totalElements = input.required<number | null>();
  page = output<PageEvent>();
}
