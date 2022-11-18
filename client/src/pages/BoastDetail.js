import styled from 'styled-components';
import { tablet } from '../styles/Responsive';
import QuestionView from '../components/QuestionView/QuestionView';
import Commentlist from '../components/Shared/Commentlist';
import CommentCreate from '../components/Shared/CommentCreate';

const Container = styled.main``;

const Title = styled.h1`
  margin: 50px 0px 0px 100px;
  margin-bottom: 60px;
  @media ${tablet} {
    font-size: 25px;
  }
`;

const CommentBox = styled.section`
  margin-top: 100px;
`;

function BoastDetail() {
  return (
    <Container>
      <Title>자랑할래요</Title>
      <QuestionView />
      <CommentBox>
        <CommentCreate />
        <Commentlist />
      </CommentBox>
    </Container>
  );
}

export default BoastDetail;
