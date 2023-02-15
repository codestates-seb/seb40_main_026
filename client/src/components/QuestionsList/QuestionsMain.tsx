/* eslint-disable import/no-unresolved */
import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState } from 'react';
import useFetch from 'utils/useFetch';

const Container = styled.div``;
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  const [Searchtitle, SetSearchtitle] = useState('');

  const [SearchData] = useFetch(
    `questions/search?keyWord=${Searchtitle}`,
    Searchtitle
  );
  const [TitleId, SetTitleId] = useState(3);

  //if 3==='답변순' 2===추천순 1===답변순

  return (
    <Container>
      <TitleHeader title={'궁금해요'} />
      <QuesSearch SetSearchOn={SetSearchOn} SetSearchtitle={SetSearchtitle} />
      <Quesfilter TitleId={TitleId} SetTitleId={SetTitleId} />
      <QuestionsList
        TitleId={TitleId}
        SearchOn={SearchOn}
        SearchData={SearchData}
      />
    </Container>
  );
};
export default QuestionsMain;
