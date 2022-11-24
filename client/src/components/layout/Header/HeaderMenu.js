import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { mobile, tablet } from '../../../styles/Responsive';

const HeaderMenu = () => {
  return (
    <Container>
      <StyledLink to={'/questions'}>궁금해요</StyledLink>
      <StyledLink to={'/boast'}>자랑할래요</StyledLink>
      <StyledLink to={'/members'}>친구들</StyledLink>
      <StyledLink to={'/contents'}>배울래요</StyledLink>
      <StyledLink to={'/study'}>모여봐요</StyledLink>
    </Container>
  );
};

export default HeaderMenu;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Dongle', sans-serif;
  font-weight: 700;
  color: black;
  cursor: pointer;

  :hover {
    color: rgb(253, 181, 58);
    border-bottom: 5px rgb(253, 181, 58) solid;
    transition: 0.1s;
  }

  @media ${mobile} {
    display: none;
  }
  @media ${tablet} {
    display: none;
  }
`;
