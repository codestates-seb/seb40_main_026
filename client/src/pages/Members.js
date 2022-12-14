import styled from 'styled-components';
import LevelBox from '../components/Members/LevelBox';
import QuestionBox from '../components/Members/QuestionBox';
import AnswerBox from '../components/Members/AnswerBox';
import { tablet, mobile } from '../styles/Responsive';
import TitleHeader from '../components/Shared/TitleHeader';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 5rem;
`;
const ListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin: auto;
  width: 70%;
  margin-top: 2rem;
  @media ${tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media ${mobile} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

function Members() {
  const token = localStorage.getItem('accessToken');
  return (
    <Container>
      <TitleHeader title={'친구들'} />
      <ListBox>
        <LevelBox token={token} />
        <QuestionBox token={token} />
        <AnswerBox token={token} />
      </ListBox>
    </Container>
  );
}

export default Members;
