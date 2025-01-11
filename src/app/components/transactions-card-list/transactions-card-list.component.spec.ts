import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsCardListComponent } from './transactions-card-list.component';

describe('TransactionsCardListComponent', () => {
  let component: TransactionsCardListComponent;
  let fixture: ComponentFixture<TransactionsCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsCardListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
