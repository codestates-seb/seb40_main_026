import styled from 'styled-components';
import LevelBox from '../components/Members/LevelBox';
import QuestionBox from '../components/Members/QuestionBox';
import AnswerBox from '../components/Members/AnswerBox';
import { tablet, mobile } from '../styles/Responsive';
const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding-bottom: 5rem;
`;
const ListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;

  @media ${tablet} {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media ${mobile} {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h1`
  margin-bottom: 4rem;
  margin-top: 2rem;
  color: #ffc149;
`;

function Members() {
  return (
    <Container>
      <Title>친구들</Title>
      <ListBox>
        <LevelBox />
        <QuestionBox />
        <AnswerBox />
      </ListBox>
    </Container>
  );
}

export default Members;
