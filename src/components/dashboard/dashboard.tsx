import Summary from '../summary';
import TransactionsTable from '../transactions-table';

import { Container } from './styles';

function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

export default Dashboard;
