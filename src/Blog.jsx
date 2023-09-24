import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: white;
  margin: 0 auto;
`;

export const Header = ({ className }) => {
  return <header className={className}>Шапка</header>;
};

const StyledHeader = styled(Header)`
  height: 120px;
`;
export const Footer = () => {
  return <footer>Футтер</footer>;
};

export const Blog = () => {
  return (
    <AppColumn>
      <StyledHeader />

      <Content>
        <H2>Контент страницы</H2>
        <Routes>
          <Route path={'/'} element={<div>Главная страница</div>} />
          <Route path={'/login'} element={<div>Авторизация</div>} />
          <Route path={'/register'} element={<div>Регистрация</div>} />
          <Route path={'/users'} element={<div>Пользователи</div>} />
          <Route path={'/post'} element={<div>Новая статья</div>} />
          <Route path={'/post/:post_id'} element={<div>Статья</div>} />
          <Route path={'*'} element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColumn>
  );
};
