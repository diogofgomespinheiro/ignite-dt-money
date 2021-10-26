import { Container } from './styles';

function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">1000$</td>
            <td>Development</td>
            <td>26/10/2021</td>
          </tr>
          <tr>
            <td>Rent</td>
            <td className="withdraw">500$</td>
            <td>House</td>
            <td>26/10/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsTable;
