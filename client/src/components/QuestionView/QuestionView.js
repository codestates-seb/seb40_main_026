import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import DetailView from '../Shared/DetailView';
import { useNavigate, useParams } from 'react-router';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
const QuestionView = ({ ContentData, TitleData }) => {
  const [QuesData, SetQuesData] = useState();
  const { id } = useParams();
  const DummyQuestions = {
    id: 1,
    title: '안녕하세요 제목을 입력해주세요',
    body: '안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요안녕하세요 내용을 입력해주세요',
    date: '22-11-14',
    nickname: '파닥몬',
    grade: '질문왕',
    class: '🐣',
    likeCount: '3',
    answerlength: '2',
  };
  useEffect(() => {
    axios
      ///questions/${id}
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`
      )
      .then((res) => {
        SetQuesData(res.data);
      });
  }, []);
  const EditPatch = () => {
    axios({
      method: 'patch',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
      data: { TitleData, ContentData },
    })
      .then(function (response) {})
      .catch((err) => {
        console.log(err);
        alert('Failed to edit the text. Please try again');
      });
  };
  return (
    <>
      <TitleHeader title={'질문 & 답변'} />
      <DetailView DummyData={QuesData} EditPatch={EditPatch} />
    </>
  );
};
export default QuestionView;
