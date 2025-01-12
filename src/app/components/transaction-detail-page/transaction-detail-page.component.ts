import { Component, computed, inject, Signal } from '@angular/core';
import { Transaction } from '../../model/transactions.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TransactionsService } from '../../services/transactions.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transaction-detail-page',
  standalone: true,
  imports: [CurrencyPipe, MatCardModule, DatePipe],
  templateUrl: './transaction-detail-page.component.html',
  styleUrl: './transaction-detail-page.component.scss',
})
export class TransactionDetailPageComponent {
  private transactionsService = inject(TransactionsService);
  transactions = this.transactionsService.loadedTransactions;
  private readonly route = inject(ActivatedRoute);

  dayId: string | null = null;
  transactionId: string | null = null;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      (this.dayId = params['dayId']),
        (this.transactionId = params['transactionId']);
    });
  }

  transaction: Signal<Transaction | undefined> = computed(() => {
    return this.transactions()
      .days.filter((day) => day.id === this.dayId)
      .map((day) =>
        day.transactions.filter(
          (transaction) => transaction.id.toString() === this.transactionId
        )
      )[0][0];
  });

  amount: Signal<number | undefined> = computed(() => {
    // I think this syntax is so stupid, but angular wants it this way for now.
    // I hope they change it eventually.
    const transaction = this.transaction();
    if (!transaction) return undefined;
    const currencyRate = this.transaction()?.currencyRate;
    if (currencyRate) {
      return transaction.amount / currencyRate;
    }
    return transaction.amount;
  });
}
