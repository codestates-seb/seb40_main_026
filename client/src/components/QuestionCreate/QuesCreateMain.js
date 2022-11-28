import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const QuestionCreate = () => {
  const [content, Setcontent] = useState();
  const [title, Settitle] = useState();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const Answerpost = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions`,
      data: { title, content },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        navigate('/questions');
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <Container>
      <TitleHeader className="TitleHeader" title={'질문하기'} />
      <Create
        PostHandler={Answerpost}
        Setcontent={Setcontent}
        content={content}
        title={title}
        Settitle={Settitle}
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
