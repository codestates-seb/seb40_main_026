import { Link } from 'react-router-dom';
import styled from 'styled-components';
import codingLogo from '../../../assets/images/codingLogo.png';
import { mobile, tablet } from '../../../styles/Responsive';

const HeaderLogo = () => {
  return (
    <Container>
      <Link to={'/'}>
        <img src={codingLogo} alt="logo" />
      </Link>
    </Container>
  );
};

export default HeaderLogo;

const Container = styled.div`
  img {
    width: 12rem;

    cursor: pointer;
  }
  /* @media ${mobile} {
    display: none;
  }
  @media ${tablet} {
    display: none;
  } */
`;
