import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tablet } from '../../../styles/Responsive';

const HeaderLogin = () => {
  return (
    <Container>
      <StyledLink to={'/login'}>로그인</StyledLink>
      <span>&</span>
      <StyledLink to={'/signup'}>회원가입</StyledLink>
    </Container>
  );
};

export default HeaderLogin;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  span {
    font-family: 'Dongle', sans-serif;
  }

  @media ${tablet} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 5vmin;
  font-family: 'Dongle', sans-serif;
  color: black;
  cursor: pointer;

  :hover {
    color: rgb(253, 181, 58);
    border-bottom: 5px rgb(253, 181, 58) solid;
    transition: 0.1s;
  }
`;
