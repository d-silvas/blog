import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripHtml' })
export class StripHtmlPipe implements PipeTransform {
  transform(value: string): string {
    let doc = new DOMParser().parseFromString(value, 'text/html');
    return doc.body.textContent || '';
  }
}
