import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import DetailView from '../Shared/DetailView';
import { Link } from 'react-router-dom';
import TitleHeader from '../Shared/TitleHeader';
const QuestionView = () => {
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

  return (
    <>
      <TitleHeader title={'질문 & 답변'} />

      <DetailView
        DummyData={DummyQuestions}
        likeCount={DummyQuestions.likeCount}
      />
    </>
  );
};
export default QuestionView;
