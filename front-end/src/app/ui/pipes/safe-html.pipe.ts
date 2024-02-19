import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private readonly _domSanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml | null {
    if (!html) {
      return null;
    }
    return this._domSanitizer.bypassSecurityTrustHtml(html);
  }
}
