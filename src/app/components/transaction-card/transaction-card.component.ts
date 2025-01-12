import { Component, computed, input, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Transaction } from '../../model/transactions.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss',
})
export class TransactionCardComponent {
  transaction = input.required<Transaction>();

  amount: Signal<number> = computed(() => {
    // I think this syntax is so stupid, but angular wants it this way for now.
    // I hope they change it eventually.
    const currencyRate = this.transaction().currencyRate;
    if (currencyRate) {
      return this.transaction().amount / currencyRate;
    }
    return this.transaction().amount;
  });
}
