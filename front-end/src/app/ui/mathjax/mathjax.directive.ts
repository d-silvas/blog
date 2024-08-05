import { Directive, ElementRef, Input } from '@angular/core';

declare global {
  interface Window {
    MathJax: {
      typesetPromise: () => void;
      startup: {
        promise: Promise<any>;
      };
    };
  }
}

@Directive({ selector: '[appMathJax]' })
export class MathJaxDirective {
  @Input() set appMathJax(mathJax: string | null) {
    this._render(this._elementRef.nativeElement, mathJax);
  }

  constructor(private readonly _elementRef: ElementRef) {}

  private _render(element: HTMLElement, text: string | null) {
    window.MathJax.startup.promise.then(() => {
      console.log('FIRING TYPESET PROMISE');
      element.innerHTML = text || '';
      window.MathJax.typesetPromise();
    });
  }
}
