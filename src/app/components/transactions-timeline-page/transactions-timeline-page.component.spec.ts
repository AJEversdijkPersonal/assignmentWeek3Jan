import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TransactionsService } from '../../services/transactions.service';
import { TransactionsTimelinePageComponent } from './transactions-timeline-page.component';

describe('TransactionsTimelinePageComponent', () => {
  let component: TransactionsTimelinePageComponent;
  let fixture: ComponentFixture<TransactionsTimelinePageComponent>;
  let transactionsService: TransactionsService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsTimelinePageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        TransactionsService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsTimelinePageComponent);
    component = fixture.componentInstance;
    transactionsService = TestBed.inject(TransactionsService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set transactions to undefined initially', () => {
    expect(component.transactions()).toBeUndefined();
  });

  it('should call getTransactions once on init', () => {
    const getTransactionsSpy = jest.spyOn(
      transactionsService,
      'getTransactions'
    );
    component.ngOnInit();
    expect(getTransactionsSpy).toHaveBeenCalledTimes(1);
  });
});
