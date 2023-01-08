import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const QuestionCreate = () => {
  const [content, Setcontent] = useState('');
  const [image, SetImage] = useState();
  const [title, Settitle] = useState('');
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const url = `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions`;

  const questionpost = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }

    formData.append('title', title);
    formData.append('content', content);
    axios
      .post(url, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        navigate('/questions');
      })
      .catch((err) => {});
  };

  return (
    <Container>
      <TitleHeader title={'질문하기'} />
      <Create
        PostHandler={questionpost}
        Setcontent={Setcontent}
        Settitle={Settitle}
        SetImage={SetImage}
      />
      ;
    </Container>
  );
};
const Container = styled.div`
  @media ${mobile} {
    .TitleHeader {
      display: none;
    }
  }
`;
export default QuestionCreate;
