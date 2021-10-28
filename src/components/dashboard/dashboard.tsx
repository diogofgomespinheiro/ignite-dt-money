import Summary from 'components/summary';
import TransactionsTable from 'components/transactions-table';

import * as Styled from './styles';

function Dashboard() {
  return (
    <Styled.Container>
      <Summary />
      <TransactionsTable />
    </Styled.Container>
  );
}

export default Dashboard;
