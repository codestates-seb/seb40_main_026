import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
import QuestionsList from './QuestionList';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Container = styled.div``;
const QuestionsMain = () => {
  const [SearchOn, SetSearchOn] = useState(false);
  const [Searchtitle, SetSearchtitle] = useState('');
  const [SearchData, SetSearchData] = useState();

  const [TitleId, SetTitleId] = useState(3);
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/search?keyWord=${Searchtitle}`
      )
      .then((res) => {
        SetSearchData(res.data);
      });
  }, [Searchtitle]);
  //if 3==='답변순' 2===추천순 1===답변순
  console.log(Searchtitle);
  console.log(TitleId);
  return (
    <Container>
      <TitleHeader title={'궁금해요'} />
      <QuesSearch
        SearchOn={SearchOn}
        SetSearchOn={SetSearchOn}
        SetSearchtitle={SetSearchtitle}
        Searchtitle={Searchtitle}
      />
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
