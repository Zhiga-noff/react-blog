import styled from 'styled-components';
import { ControlPanel, Logo } from './components';

const Discription = styled.div`
  font-style: italic;
`;

const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Discription>
        Веб-технологии
        <br />
        Написание кода
        <br />
        Разбор ошибок
      </Discription>
      <ControlPanel />
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

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
