import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'transactions-timeline',
        loadComponent: () =>
          import(
            './components/transactions-timeline-page/transactions-timeline-page.component'
          ).then((c) => c.TransactionsTimelinePageComponent),
      },
      {
        path: 'transaction/:dayId/:transactionId',
        loadComponent: () =>
          import(
            './components/transaction-detail-page/transaction-detail-page.component'
          ).then((c) => c.TransactionDetailPageComponent),
      },
    ],
  },
];
