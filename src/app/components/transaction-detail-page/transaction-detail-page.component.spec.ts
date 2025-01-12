import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionDetailPageComponent } from './transaction-detail-page.component';
import { TransactionsService } from '../../services/transactions.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

describe('TransactionDetailPageComponent', () => {
  let component: TransactionDetailPageComponent;
  let fixture: ComponentFixture<TransactionDetailPageComponent>;
  let transactionsServiceMock: any;
  let activatedRouteMock: any;

  beforeEach(async () => {
    transactionsServiceMock = {
      loadedTransactions: jest.fn().mockReturnValue({
        days: [
          {
            id: '1',
            transactions: [
              { id: '1', amount: 100, currencyRate: 1.2 },
              { id: '2', amount: 200 },
            ],
          },
        ],
      }),
    };

    activatedRouteMock = {
      queryParams: of({ dayId: '1', transactionId: '1' }),
    };

    await TestBed.configureTestingModule({
      imports: [
        CurrencyPipe,
        MatCardModule,
        DatePipe,
        TransactionDetailPageComponent,
      ],

      providers: [
        { provide: TransactionsService, useValue: transactionsServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dayId and transactionId from queryParams', () => {
    expect(component.dayId).toBe('1');
    expect(component.transactionId).toBe('1');
  });

  it('should compute the correct transaction', () => {
    const transaction = component.transaction();
    expect(transaction).toEqual({ id: '1', amount: 100, currencyRate: 1.2 });
  });

  it('should compute the correct amount with currencyRate', () => {
    const amount = component.amount();
    expect(amount).toBe(83.33333333333334);
  });

  // Neither of these work for some reason, I don't have the time to properly debug this,
  //  so doing something super ugly to fix this and still get the test coverage.
  xit('should compute the correct amount without currencyRate', () => {
    activatedRouteMock.queryParams = of({ dayId: '1', transactionId: '2' });
    // component.transactionId = '2';
    // console.log(component);
    fixture.detectChanges();
    const amount = component.amount();
    expect(amount).toBe(200);
  });
});

describe('TransactionDetailPageComponentWithOtherParams', () => {
  let component: TransactionDetailPageComponent;
  let fixture: ComponentFixture<TransactionDetailPageComponent>;
  let transactionsServiceMock: any;
  let activatedRouteMock: any;

  beforeEach(async () => {
    transactionsServiceMock = {
      loadedTransactions: jest.fn().mockReturnValue({
        days: [
          {
            id: '1',
            transactions: [
              { id: '1', amount: 100, currencyRate: 1.2 },
              { id: '2', amount: 200 },
            ],
          },
        ],
      }),
    };

    activatedRouteMock = {
      queryParams: of({ dayId: '1', transactionId: '2' }),
    };

    await TestBed.configureTestingModule({
      imports: [
        CurrencyPipe,
        MatCardModule,
        DatePipe,
        TransactionDetailPageComponent,
      ],

      providers: [
        { provide: TransactionsService, useValue: transactionsServiceMock },
        { provide: ActivatedRoute, useValue: activatedRouteMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // see its ugly, but it works and did not take too much time to set up.
  it('should compute the correct amount without currencyRate', () => {
    const amount = component.amount();
    expect(amount).toBe(200);
  });
});
