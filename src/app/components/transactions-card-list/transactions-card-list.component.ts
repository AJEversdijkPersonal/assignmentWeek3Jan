import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { TransactionCardComponent } from '../transaction-card/transaction-card.component';
9;
@Component({
  selector: 'app-transactions-card-list',
  standalone: true,
  imports: [MatListModule, TransactionCardComponent],
  templateUrl: './transactions-card-list.component.html',
  styleUrl: './transactions-card-list.component.scss',
})
export class TransactionsCardListComponent {
  transactions = {
    days: [
      {
        id: '2022-11-08',
        transactions: [
          {
            id: 1,
            timestamp: '2022-11-08T10:30:47.123456',
            amount: 17.95,
            currencyCode: 'USD',
            currencyRate: 1.173628,
            description: 'Some interesting description',
            otherParty: {
              name: 'Mister X',
              iban: 'NL00RABO0123456789',
            },
          },
          {
            id: 2,
            timestamp: '2022-11-08T12:45:47.123456',
            amount: -25.95,
            currencyCode: 'EUR',
            description: 'Some other interesting description',
            otherParty: {
              name: 'Miss Y',
              iban: 'NL00RABO9876543210',
            },
          },
          {
            id: 3,
            timestamp: '2022-11-08T10:30:47.123456',
            amount: 3456.67,
            currencyCode: 'EUR',
            description: 'Finally payday',
            otherParty: {
              name: 'Company Z',
              iban: 'NL00RABO3210654789',
            },
          },
        ],
      },
      {
        id: '2022-11-06',
        transactions: [
          {
            id: 1,
            timestamp: '2022-11-06T17:12:47.123456',
            amount: -38.95,
            currencyCode: 'EUR',
            description: 'Gym',
            otherParty: {
              name: 'Gym be fit',
              iban: 'NL00RABO0123456789',
            },
          },
          {
            id: 2,
            timestamp: '2022-11-06T15:45:00.123456',
            amount: -987.65,
            currencyCode: 'EUR',
            description: 'Monthly rent',
            otherParty: {
              name: 'RENTAL',
              iban: 'NL00RABO9876543210',
            },
          },
          {
            id: 3,
            timestamp: '2022-11-06T11:56:12.123456',
            amount: 123.45,
            currencyCode: 'EUR',
            description: 'Payment request for dinner',
            otherParty: {
              name: 'People to hang with',
              iban: 'NL00RABO3210654789',
            },
          },
        ],
      },
      {
        id: '2022-11-05',
        transactions: [
          {
            id: 1,
            timestamp: '2022-11-05T11:39:59.123456',
            amount: -58.47,
            currencyCode: 'EUR',
            description: 'Some interesting description',
            otherParty: {
              name: 'Groceries',
              iban: 'NL00RABO0123764789',
            },
          },
        ],
      },
      {
        id: '2022-11-02',
        transactions: [
          {
            id: 1,
            timestamp: '2022-11-02T23:30:45.123456',
            amount: -99.87,
            currencyCode: 'EUR',
            description: 'Some interesting description',
            otherParty: {
              name: 'Restaurant A',
              iban: 'NL00RABO0128356789',
            },
          },
          {
            id: 2,
            timestamp: '2022-11-06T12:45:47.123456',
            amount: -50,
            currencyCode: 'EUR',
            description: 'ATM',
          },
        ],
      },
    ],
  };
}
