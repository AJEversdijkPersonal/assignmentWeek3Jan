import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TransactionsCardListComponent } from '../transactions-card-list/transactions-card-list.component';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions-timeline-page',
  standalone: true,
  imports: [TransactionsCardListComponent],
  templateUrl: './transactions-timeline-page.component.html',
  styleUrl: './transactions-timeline-page.component.scss',
})
export class TransactionsTimelinePageComponent implements OnInit {
  private transactionService = inject(TransactionsService);
  private destroyRef = inject(DestroyRef);
  isFetching = signal(false);

  ngOnInit(): void {
    this.isFetching.set(true);
    const transactionsSub = this.transactionService
      .getTransactions()
      .subscribe({
        complete: () => {
          this.isFetching.set(false);
        },
        error: (error) => console.log(error),
      });
    this.destroyRef.onDestroy(() => transactionsSub.unsubscribe());
  }
}
