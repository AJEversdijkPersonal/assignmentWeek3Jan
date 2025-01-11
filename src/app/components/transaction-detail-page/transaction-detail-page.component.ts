import { Component, computed, input, Signal } from '@angular/core';
import { Transaction } from '../../model/transactions.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-detail-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './transaction-detail-page.component.html',
  styleUrl: './transaction-detail-page.component.scss',
})
export class TransactionDetailPageComponent {
  transaction = input.required<Transaction>();

  amount: Signal<number> = computed(() => {
    // I think this syntax is so stupid, but angular wants it this way for now.
    // I hope they change it eventually.
    const currencyRate = this.transaction().currencyRate;
    if (currencyRate) {
      return this.transaction().amount * currencyRate;
    }
    return this.transaction().amount;
  });
}
