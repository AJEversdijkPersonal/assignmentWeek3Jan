import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-transaction-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './transaction-card.component.html',
  styleUrl: './transaction-card.component.scss',
})
export class TransactionCardComponent {}
