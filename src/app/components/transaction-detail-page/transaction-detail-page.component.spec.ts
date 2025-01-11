import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailPageComponent } from './transaction-detail-page.component';

describe('TransactionDetailPageComponent', () => {
  let component: TransactionDetailPageComponent;
  let fixture: ComponentFixture<TransactionDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
