import styled from 'styled-components';
import BoastViewMain from '../components/Boast/BoastViewMain';
import TitleHeader from '../components/Shared/TitleHeader';

const Container = styled.main`
  margin: auto;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

function BoastView() {
  return (
    <Container>
      <TitleHeader title={'자랑할래요'} />
      <BoastViewMain />
    </Container>
  );
}

export default BoastView;
