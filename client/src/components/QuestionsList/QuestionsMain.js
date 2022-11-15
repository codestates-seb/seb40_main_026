import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import QuestionsHeader from './QuestionsHeader';
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div`
  margin-top: 2rem;

  background-color: blue;
`;
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  return (
    <Container>
      <QuestionsHeader />
      <QuesSearch SearchOn={SearchOn} SetSearchOn={SetSearchOn} />
      <Quesfilter />
      <QuestionsList />
    </Container>
  );
};
export default QuestionsMain;
