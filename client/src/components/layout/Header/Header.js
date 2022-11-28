import { useEffect } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../../styles/Responsive';
import HeaderHamburger from './HeaderHamburger';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderProfile from './HeaderProfile';

const Header = () => {
  const isLogin = localStorage.getItem('accessToken') !== null;
  useEffect(() => {
    console.log('겟 액세슽토큰', localStorage.getItem('accessToken'));
  }, [isLogin]);
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
  height: 4rem;
  align-items: center; //수직 가운데 정렬
  margin: 0 15%;

  border-bottom: 1px gray solid;
  position: relative;
  background-color: white;
  z-index: 10;
  @media ${tablet} {
    margin: 0 10%;
  }
  @media ${mobile} {
    margin: 0 5%;
  }
`;
