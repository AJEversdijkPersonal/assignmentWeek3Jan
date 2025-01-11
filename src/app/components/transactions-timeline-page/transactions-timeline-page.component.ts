import { Component } from '@angular/core';
import { TransactionsCardListComponent } from '../transactions-card-list/transactions-card-list.component';

@Component({
  selector: 'app-transactions-timeline-page',
  standalone: true,
  imports: [TransactionsCardListComponent],
  templateUrl: './transactions-timeline-page.component.html',
  styleUrl: './transactions-timeline-page.component.scss',
})
export class TransactionsTimelinePageComponent {}
