import { formatCurrency, formatDate } from 'utils';
import { useTransactions } from 'context/transactions-context';

import * as Styled from './styles';

function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Styled.Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{formatCurrency(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{formatDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Styled.Container>
  );
}

export default TransactionsTable;
