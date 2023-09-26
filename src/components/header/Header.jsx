import styled from 'styled-components';
import { Logo } from './components';

const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  height: 120px;
  padding: 20px 40px;
  box-shadow: 0 -2px 15px #000;

  position: fixed;
  top: 0;
  background-color: white;
  width: 1000px;
`;
