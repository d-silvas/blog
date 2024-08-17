import { Injectable } from '@angular/core';

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

@Injectable({ providedIn: 'root' })
export class MathJaxService {
  renderMathJax() {
    window.MathJax.startup.promise.then(() => {
      console.log('FIRING TYPESET PROMISE');
      // element.innerHTML = text || '';
      window.MathJax.typesetPromise();
    });
  }
}
