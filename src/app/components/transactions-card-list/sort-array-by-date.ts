// I did not want to do this but jest is being  a bit of a pain with the signals. moving this so I can mock it.
// it is a pure function anyway
import { Day, Transactions } from '../../model/transactions.model';

export const sortArrayByDate = (
  arr: Transactions | null | undefined
): Day[] => {
  if (arr?.days.length === 0 || !arr) {
    return [];
  }
  let newArr = arr.days.sort(function (a, b) {
    return Number(new Date(b.id)) - Number(new Date(a.id));
  });
  return newArr;
};
