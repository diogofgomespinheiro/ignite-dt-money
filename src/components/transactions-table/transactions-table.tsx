import { useEffect } from 'react';

import { Container } from './styles';

function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions')
      .then(res => res.json())
      .then(data => console.log(data));
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
