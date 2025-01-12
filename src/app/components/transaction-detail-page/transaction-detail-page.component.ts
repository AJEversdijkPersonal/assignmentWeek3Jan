import { Component, computed, inject, Signal } from '@angular/core';
import { Transaction } from '../../model/transactions.model';
import { CurrencyPipe } from '@angular/common';
import { TransactionsService } from '../../services/transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
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
    console.log(this.dayId, this.transactionId);
  }

  transaction: Signal<Transaction | any | undefined> = computed(() => {
    return this.transactions()
      .days.filter((day) => day.id === this.dayId)
      .map((day) =>
        day.transactions.filter(
          (transaction) => transaction.id.toString() === this.transactionId
        )
      );
  });

  amount: Signal<number | undefined> = computed(() => {
    // I think this syntax is so stupid, but angular wants it this way for now.
    // I hope they change it eventually.
    const transaction = this.transaction();
    if (!transaction) return undefined;
    const currencyRate = this.transaction()?.currencyRate;
    if (currencyRate) {
      return transaction.amount * currencyRate;
    }
    return transaction.amount;
  });
}
