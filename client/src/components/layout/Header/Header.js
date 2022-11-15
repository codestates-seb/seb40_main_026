import styled from 'styled-components';
import HeaderHamburger from './HeaderHamburger';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  return (
    <Container>
      <HeaderLogo />
      <HeaderMenu />
      <HeaderLogin />
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
  z-index: 100;
  position: relative;
  background-color: white;
`;
