import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from '../../../styles/Responsive';

const HeaderLogin = () => {
  return (
    <Container>
      <>
        <StyledLink to={'/login'}>로그인</StyledLink>
        <span>&</span>
        <StyledLink to={'/signup'}>회원가입</StyledLink>
      </>
    </Container>
  );
};

export default HeaderLogin;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 12rem;
  span {
    font-weight: 500;
    margin: 0 0.2rem;
    font-size: 0.6rem;
  }

  @media ${tablet} {
    display: none;
  }
  @media ${mobile} {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  color: black;
  cursor: pointer;

  :hover {
    color: rgb(253, 181, 58);
    border-bottom: 5px rgb(253, 181, 58) solid;
    transition: 0.1s;
  }
`;
