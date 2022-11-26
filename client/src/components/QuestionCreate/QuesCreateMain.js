import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
const QuestionCreate = () => {
  const [content, Setcontent] = useState();
  const [title, Settitle] = useState();
  const Answerpost = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions`,
      data: { title, content },
      headers: {
        token:
          'Bearer eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJVU0VSIl0sInVzZXJuYW1lIjoiYWJjMTIzNEBnbWFpbC5jb20iLCJtZW1iZXJJZCI6MSwic3ViIjoiYWJjMTIzNEBnbWFpbC5jb20iLCJpYXQiOjE2NjkzODM0NzEsImV4cCI6MTY2OTM4NTI3MX0._pQR2rBpdcR8HJ7uyTtvf8Rtvh5jvqdvj7s2LQsrbk7y5B5Yo4n5FPYnxpeb-kck7cKSkHD8cCRQxod3PKkhzQ',
      },
    })
      .then()
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
