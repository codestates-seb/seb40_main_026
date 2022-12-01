import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const QuestionCreate = () => {
  const [content, Setcontent] = useState();
  const [image, SetImage] = useState();
  const [title, Settitle] = useState();
  const [Data, setData] = useState(JSON.stringify({ title, content }));
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const url = `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions`;

  let questionPostDto = [{ title, content }];

  const questionpost = (e) => {
    e.preventDefault();

    // if (image) {
    //   formData.append('image', image);
    // }
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
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  console.log(image);
  return (
    <Container>
      <TitleHeader className="TitleHeader" title={'질문하기'} />
      <Create
        PostHandler={questionpost}
        Setcontent={Setcontent}
        content={content}
        title={title}
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
