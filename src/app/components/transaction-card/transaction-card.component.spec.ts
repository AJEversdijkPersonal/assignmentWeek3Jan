import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCardComponent } from './transaction-card.component';
import { By } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

describe('TransactionCardComponent', () => {
  let component: TransactionCardComponent;
  let fixture: ComponentFixture<TransactionCardComponent>;
  const mockTransaction = {
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
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionCardComponent],
      providers: [CurrencyPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('transaction', mockTransaction);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct transaction amount', () => {
    const amountElement = fixture.debugElement.query(By.css('#amount'));
    expect(amountElement.nativeElement.textContent).toContain('Amount: €15.29');
  });

  it('should display the correct other party name', () => {
    const otherPartyElement = fixture.debugElement.query(
      By.css('#other-party')
    );
    expect(otherPartyElement.nativeElement.textContent).toContain(
      mockTransaction.otherParty.name
    );
  });
});
