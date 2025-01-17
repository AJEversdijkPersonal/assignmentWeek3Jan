import { inject, Injectable, signal } from '@angular/core';
import { Day, Transactions } from '../model/transactions.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private httpClient = inject(HttpClient);
  private transactions = signal<Transactions | undefined | null>(undefined);

  loadedTransactions = this.transactions.asReadonly();
  loadedTransactionsDays = this.transactions.asReadonly();

  getTransactions = () => {
    return this.fetchTransactions().pipe(
      tap({
        next: (transactions) => {
          return transactions ? this.transactions.set(transactions) : null;
        },
      })
    );
  };

  fetchTransactions = () => {
    return this.httpClient
      .get<Transactions>('http://localhost:8080/api/transactions', {
        observe: 'response',
      })
      .pipe(
        map((res) => res.body),
        catchError((error) => {
          return throwError(() => new Error('could not get transactions'));
        })
      );
  };

  sortArrayByDate = (arr: Transactions | undefined | null): Day[] => {
    if (!arr) return [];
    const newArr = arr.days.sort(function (a, b) {
      return Number(new Date(b.id)) - Number(new Date(a.id));
    });
    return newArr;
  };
}
