import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Transactions } from '../model/transactions.model';
import { TransactionsService } from './transactions.service';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransactionsService,
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(TransactionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch transactions', () => {
    const mockTransactions: Transactions = {
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
          ],
        },
      ],
    };

    service.getTransactions().subscribe((transactions) => {
      expect(transactions).toEqual(mockTransactions);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/transactions');
    expect(req.request.method).toBe('GET');
    req.flush(mockTransactions);
  });

  it('should handle error when fetching transactions', () => {
    service.getTransactions().subscribe({
      next: () => fail('expected an error, not transactions'),
      error: (error) =>
        expect(error.message).toContain('could not get transactions'),
    });

    const req = httpMock.expectOne('http://localhost:8080/api/transactions');
    req.flush('error', { status: 500, statusText: 'Server Error' });
  });
});
