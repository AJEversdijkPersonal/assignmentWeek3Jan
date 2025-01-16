import { sortArrayByDate } from './sort-array-by-date';
import { Day, Transactions } from '../../model/transactions.model';

describe('sortArrayByDate', () => {
  it('should return an empty array if input is null', () => {
    const result = sortArrayByDate(null);
    expect(result).toEqual([]);
  });

  it('should return an empty array if input is undefined', () => {
    const result = sortArrayByDate(undefined);
    expect(result).toEqual([]);
  });

  it('should return an empty array if days array is empty', () => {
    const transactions: Transactions = { days: [] };
    const result = sortArrayByDate(transactions);
    expect(result).toEqual([]);
  });

  it('should sort the days array by date in descending order', () => {
    const transactions: Transactions = {
      days: [
        {
          id: '2022-11-05',
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
          ],
        },
        {
          id: '2022-11-06',
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
          ],
        },
      ],
    };

    const transactions2: Transactions = {
      days: [
        {
          id: '2022-11-06',
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
          id: '2022-11-05',
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
          ],
        },
      ],
    };
    const result = sortArrayByDate(transactions);
    expect(result).toEqual(transactions2.days);
  });

  it('should handle dates with the same value correctly', () => {
    const transactions: Transactions = {
      days: [
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
          ],
        },
        {
          id: '2022-11-06',
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
      ],
    };
    const result = sortArrayByDate(transactions);
    expect(result).toEqual(transactions.days);
  });
});
