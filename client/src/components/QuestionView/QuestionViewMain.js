import QuestionView from './QuestionView';
import AnswerCreate from './AnswerCreate';
import Answer from './Answer';
import { useNavigate, useParams } from 'react-router';
const QuestionViewMain = () => {
  return (
    <>
      <QuestionView />
      <AnswerCreate />
      <Answer />
    </>
  );
};
export default QuestionViewMain;
