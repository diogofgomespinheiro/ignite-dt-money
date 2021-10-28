import incomingImg from 'assets/income.svg';
import expenseImg from 'assets/outcome.svg';
import totalImg from 'assets/total.svg';
import { useTransactions } from 'context/transactions-context';
import { formatCurrency } from 'utils';

import * as Styled from './styles';

type TransactionsSummary = {
  incomings: number;
  expenses: number;
  total: number;
};

function Summary() {
  const { transactions } = useTransactions();

  const { incomings, expenses, total } = transactions.reduce<TransactionsSummary>(
    (acc, transaction): TransactionsSummary => {
      if (transaction.type === 'deposit') {
        return {
          ...acc,
          incomings: acc.incomings + transaction.amount,
          total: acc.total + transaction.amount
        };
      }

      return {
        ...acc,
        expenses: acc.expenses + transaction.amount,
        total: acc.total - transaction.amount
      };
    },
    {
      incomings: 0,
      expenses: 0,
      total: 0
    }
  );

  return (
    <Styled.Container>
      <div>
        <header>
          <p>Incomings</p>
          <img src={incomingImg} alt="Incomings" />
        </header>
        <strong>{formatCurrency(incomings)}</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>- {formatCurrency(expenses)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(total)}</strong>
      </div>
    </Styled.Container>
  );
}

export default Summary;
