import { useState } from 'react';
import styled from 'styled-components';
import HeaderHamburger from './HeaderHamburger';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Container>
      <HeaderLogo />
      <HeaderMenu />
      {isLogin ? <HeaderProfile /> : <HeaderLogin />}
      <HeaderHamburger />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  padding: 10px 30px;
  border-bottom: 1px gray solid;
  position: relative;
  background-color: white;
  z-index: 10;
`;
