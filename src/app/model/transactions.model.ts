export interface OtherParty {
  name: string;
  iban: string; // TODO if I have time I can make a proper check for the validity of the IBAN.
}

export interface Transaction {
  id: number;
  timestamp: string;
  amount: number;
  currencyCode: string;
  currencyRate?: number;
  description: string;
  otherParty?: OtherParty;
}

export interface Day {
  id: string;
  transactions: Transaction[];
}

export interface Transactions {
  days: Day[];
}
