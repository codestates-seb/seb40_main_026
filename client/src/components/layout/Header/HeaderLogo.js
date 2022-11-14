import styled from 'styled-components';
import codingLogo from '../../../assets/images/codingLogo.png';

const HeaderLogo = () => {
  return (
    <Container>
      <img src={codingLogo} alt="logo" />
    </Container>
  );
};

export default HeaderLogo;

const Container = styled.div`
  > img {
    width: 300px;
    cursor: pointer;
  }
`;
