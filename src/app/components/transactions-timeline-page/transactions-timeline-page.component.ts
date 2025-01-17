import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TransactionsCardListComponent } from '../transactions-card-list/transactions-card-list.component';
import { TransactionsService } from '../../services/transactions.service';
import { Transactions } from '../../model/transactions.model';

@Component({
  selector: 'app-transactions-timeline-page',
  standalone: true,
  imports: [TransactionsCardListComponent],
  templateUrl: './transactions-timeline-page.component.html',
  styleUrl: './transactions-timeline-page.component.scss',
})
export class TransactionsTimelinePageComponent implements OnInit {
  private transactionsService = inject(TransactionsService);
  private destroyRef = inject(DestroyRef);
  transactions = signal<Transactions | undefined | null>(undefined);

  ngOnInit(): void {
    const subscription = this.transactionsService.getTransactions().subscribe();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
