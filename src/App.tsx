import { useState } from 'react';
import Modal from 'react-modal';

import Header from './components/header';
import Dashboard from './components/dashboard';
import NewTransactionModal from './components/new-transaction-modal';
import { TransactionsProvider } from 'context/transactions-context';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <TransactionsProvider>
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionsProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
