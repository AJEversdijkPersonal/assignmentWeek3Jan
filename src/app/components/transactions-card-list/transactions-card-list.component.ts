import { Component, computed, inject, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionCardComponent } from '../transaction-card/transaction-card.component';
import { sortArrayByDate } from './sort-array-by-date';
9;
@Component({
  selector: 'app-transactions-card-list',
  standalone: true,
  imports: [MatListModule, TransactionCardComponent],
  templateUrl: './transactions-card-list.component.html',
  styleUrl: './transactions-card-list.component.scss',
})
export class TransactionsCardListComponent {
  private transactionsService = inject(TransactionsService);
  transactions = this.transactionsService.loadedTransactions;
  isFetching = signal(false);
  sortArrayByDateLocal = sortArrayByDate;
  constructor(private router: Router) {}

  onCardClick = (dayId: string, transactionId: number) => {
    this.router.navigate(['/transaction'], {
      queryParams: { dayId: dayId, transactionId: transactionId },
    });
  };
}
