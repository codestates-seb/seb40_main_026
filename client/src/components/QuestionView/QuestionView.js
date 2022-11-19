import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import DetailView from '../Shared/DetailView';

const QuestionView = () => {
  const DummyQuestions = {
    id: 1,
    title: '안녕하세요 제목을 입력해주세요',
    body: '안녕하세요 내용을 입력해주세요',
    date: '2022-11-14',
    nickname: '파닥몬',
    grade: '질문왕',
    class: '🐣',

    thums: '3',
    answerlength: '2',
  };

  return (
    <>
      <DetailView />
    </>
  );
};
export default QuestionView;
