import logoImg from 'assets/logo.svg';

import * as Styled from './styles';

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
};

function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Styled.Content>
    </Styled.Container>
  );
}

export default Header;
