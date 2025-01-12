import { Component, inject, NgZone, Signal } from '@angular/core';
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

  onCardClick = (dayId: string, transactionId: number) => {
    console.log(dayId, transactionId);
    this.router.navigate(['/transaction'], {
      queryParams: { dayId: dayId, transactionId: transactionId },
    });
  };
}
