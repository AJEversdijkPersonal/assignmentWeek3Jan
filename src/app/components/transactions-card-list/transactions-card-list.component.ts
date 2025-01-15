import {
  Component,
  computed,
  inject,
  NgZone,
  signal,
  Signal,
} from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TransactionCardComponent } from '../transaction-card/transaction-card.component';
import { Router } from '@angular/router';
import { TransactionsService } from '../../services/transactions.service';
import { Transactions } from '../../model/transactions.model';
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
  constructor(private router: Router) {}
  asc = signal(true);
  computedDays = computed(() => {
    console.log(this.transactions);
    const transactions = this.transactions();
    const sortedTransactionsByDays = transactions
      ? this.sortArrayByDate(transactions, this.asc())
      : transactions;
    return sortedTransactionsByDays;
  });

  onCardClick = (dayId: string, transactionId: number) => {
    this.router.navigate(['/transaction'], {
      queryParams: { dayId: dayId, transactionId: transactionId },
    });
  };

  sortArrayByDate = (arr: Transactions, asc: boolean) => {
    // TODO if you are seeing this text I did not have enough time to implement the asc/desc logic
    if (arr.days.length === 0) return;
    const newArr = arr.days.sort(function (a, b) {
      return Number(new Date(b.id)) - Number(new Date(a.id));
    });
    if (!asc) {
      return newArr.reverse();
    }
    return newArr;
  };
}
