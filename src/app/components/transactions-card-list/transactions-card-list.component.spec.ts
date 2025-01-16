import { ComponentFixture, TestBed } from '@angular/core/testing';

import { signal } from '@angular/core';
import { Router } from '@angular/router';
import { Transactions } from '../../model/transactions.model';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionsCardListComponent } from './transactions-card-list.component';

describe('TransactionsCardListComponent', () => {
  let component: TransactionsCardListComponent;
  let fixture: ComponentFixture<TransactionsCardListComponent>;
  let router: Router;
  let transactionsServiceMock: any;
  let routerMock: any;

  const transactions: Transactions = {
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

  beforeEach(async () => {
    routerMock = { navigate: jest.fn() };
    transactionsServiceMock = {
      loadedTransactions: jest.fn().mockReturnValue(transactions),
    };

    await TestBed.configureTestingModule({
      imports: [TransactionsCardListComponent],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: TransactionsService, useValue: transactionsServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsCardListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should navigate to transaction on card click', () => {
    const dayId = '2023-01-01';
    const transactionId = 1;
    component.onCardClick(dayId, transactionId);
    expect(router.navigate).toHaveBeenCalledWith(['/transaction'], {
      queryParams: { dayId: dayId, transactionId: transactionId },
    });
  });

  it('should display the correct number of transaction cards', () => {
    component.transactions = signal(transactions);
    fixture.detectChanges();
    const transactionCards =
      fixture.debugElement.nativeElement.querySelectorAll(
        'app-transaction-card'
      );
    expect(transactionCards.length).toBe(9);
  });
});
