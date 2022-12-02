import QuestionView from './QuestionView';
import AnswerCreate from './AnswerCreate';
import Answer from './Answer';
import { useState } from 'react';
const QuestionViewMain = () => {
  const [TitleData, SetTitleData] = useState();
  const [ContentData, SetContentData] = useState();
  const [State, SetState] = useState(0);
  const [image, SetImage] = useState();

  return (
    <>
      <QuestionView
        SetTitleData={SetTitleData}
        TitleData={TitleData}
        SetContentData={SetContentData}
        ContentData={ContentData}
        SetState={SetState}
        State={State}
      />
      <Answer
        State={State}
        SetState={SetState}
        image={image}
        SetImage={SetImage}
      />
      <AnswerCreate
        SetState={SetState}
        State={State}
        SetImage={SetImage}
        image={image}
      />
    </>
  );
};
export default QuestionViewMain;
