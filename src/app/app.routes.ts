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
        path: 'welcome',
        loadComponent: () =>
          import('./components/landing-page/landing-page.component').then(
            (c) => c.LandingPageComponent
          ),
      },
      {
        // path: 'transaction/:dayId/:transactionId',
        path: 'transaction',
        loadComponent: () =>
          import(
            './components/transaction-detail-page/transaction-detail-page.component'
          ).then((c) => c.TransactionDetailPageComponent),
      },
    ],
  },
];
