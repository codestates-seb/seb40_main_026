import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import { useState } from 'react';
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  return (
    <>
      <QuesSearch SearchOn={SearchOn} SetSearchOn={SetSearchOn} />
      <Quesfilter />
      <QuestionsList />
    </>
  );
};
export default QuestionsMain;
