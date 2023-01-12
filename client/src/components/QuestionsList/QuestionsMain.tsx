import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';

const Container = styled.div``;
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  const [Searchtitle, SetSearchtitle] = useState('');
  const [SearchData, SetSearchData] = useState([]);
  const [TitleId, SetTitleId] = useState(3);

  useEffect(() => {
    axios
      .get(`${BASE_URL}questions/search?keyWord=${Searchtitle}`)
      .then((res) => {
        SetSearchData(res.data);
      });
  }, [Searchtitle]);
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
