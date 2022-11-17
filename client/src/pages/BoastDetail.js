import styled from 'styled-components';
import { tablet } from '../styles/Responsive';
import BoastView from '../components/Boast/BoastView';

const Container = styled.main``;

const Title = styled.h1`
  margin: 50px 0px 0px 100px;
  @media ${tablet} {
    font-size: 25px;
  }
`;

function BoastDetail() {
  return (
    <Container>
      <Title>자랑할래요</Title>
      <BoastView />
    </Container>
  );
}

export default BoastDetail;
