import { ChangeEvent, FormEvent, useState } from 'react';
import Modal from 'react-modal';

import incomeImg from 'assets/income.svg';
import outcomeImg from 'assets/outcome.svg';
import closeImg from 'assets/close.svg';
import { useTransactions, TransactionInput } from 'context/transactions-context';

import * as Styled from './styles';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

const INITIAL_FORM_DATA: TransactionInput = {
  amount: 0,
  category: '',
  title: '',
  type: 'deposit'
};

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [formData, setFormData] = useState<TransactionInput>(INITIAL_FORM_DATA);

  const { createTransaction } = useTransactions();

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement>,
    formatter?: (value: string) => string | number
  ) {
    const { name, value } = event.target;
    const formattedValue = formatter ? formatter(value) : value;

    setFormData(prevState => ({ ...prevState, [name]: formattedValue }));
  }

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction(formData);

    setFormData(INITIAL_FORM_DATA);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close Modal" />
      </button>

      <Styled.Container onSubmit={handleCreateNewTransaction}>
        <h2>Create Transaction</h2>

        <input name="title" placeholder="Title" onChange={handleInputChange} />
        <input
          name="amount"
          type="number"
          placeholder="Value"
          onChange={event => handleInputChange(event, Number)}
        />

        <Styled.TransactionTypeContainer>
          <Styled.RadioBox
            type="button"
            onClick={() => setFormData(prevState => ({ ...prevState, type: 'deposit' }))}
            isActive={formData.type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </Styled.RadioBox>

          <Styled.RadioBox
            type="button"
            onClick={() => setFormData(prevState => ({ ...prevState, type: 'withdraw' }))}
            isActive={formData.type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Expense" />
            <span>Expense</span>
          </Styled.RadioBox>
        </Styled.TransactionTypeContainer>

        <input name="category" placeholder="Category" onChange={handleInputChange} />
        <button type="submit">Create</button>
      </Styled.Container>
    </Modal>
  );
}

export default NewTransactionModal;
