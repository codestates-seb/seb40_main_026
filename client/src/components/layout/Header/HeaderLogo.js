import { Link } from 'react-router-dom';
import styled from 'styled-components';
import codingLogo from '../../../assets/images/codingLogo.png';

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
    width: 270px;
    cursor: pointer;
  }
`;
