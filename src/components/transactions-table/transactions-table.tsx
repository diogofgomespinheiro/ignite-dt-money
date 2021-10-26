import { useEffect } from 'react';

import { api } from '../../services/api';

import { Container } from './styles';

function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
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
