import { Directive, OnDestroy } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Directive()
export abstract class BaseComponent implements OnDestroy {
   destroy$: AsyncSubject<void> = new AsyncSubject<void>();

   ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
   }
}
