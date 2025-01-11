import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsTimelinePageComponent } from './transactions-timeline-page.component';

describe('TransactionsTimelinePageComponent', () => {
  let component: TransactionsTimelinePageComponent;
  let fixture: ComponentFixture<TransactionsTimelinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionsTimelinePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsTimelinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});