import styled from 'styled-components';
import BoastList from '../components/Boast/BoastList';
import TitleHeader from '../components/Shared/TitleHeader';

function Boast() {
  const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  `;

  return (
    <Container>
      <TitleHeader title={'자랑할래요'} />
      <BoastList />
    </Container>
  );
}

export default Boast;
