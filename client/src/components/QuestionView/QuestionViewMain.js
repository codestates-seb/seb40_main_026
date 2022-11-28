import QuestionView from './QuestionView';
import AnswerCreate from './AnswerCreate';
import Answer from './Answer';
import { useState } from 'react';
const QuestionViewMain = () => {
  const [TitleData, SetTitleData] = useState();
  const [ContentData, SetContentData] = useState();
  console.log(TitleData);
  console.log(ContentData);
  return (
    <>
      <QuestionView
        SetTitleData={SetTitleData}
        TitleData={TitleData}
        SetContentData={SetContentData}
        ContentData={ContentData}
      />
      <Answer />
      <AnswerCreate />
    </>
  );
};
export default QuestionViewMain;
