import incomingImg from '../../assets/income.svg';
import expenseImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from './styles';

function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Incomings</p>
          <img src={incomingImg} alt="Incomings" />
        </header>
        <strong>1000$</strong>
      </div>
      <div>
        <header>
          <p>Expenses</p>
          <img src={expenseImg} alt="Expenses" />
        </header>
        <strong>- 500$</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>500$</strong>
      </div>
    </Container>
  );
}

export default Summary;
