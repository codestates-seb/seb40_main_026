import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState } from 'react';
const Container = styled.div``;
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  return (
    <Container>
      <TitleHeader title={'궁금해요'} />
      <QuesSearch SearchOn={SearchOn} SetSearchOn={SetSearchOn} />
      <Quesfilter />
      <QuestionsList />
    </Container>
  );
};
export default QuestionsMain;
