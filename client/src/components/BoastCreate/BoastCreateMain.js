import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../utils/api';

const Container = styled.header``;
const BoastCreate = () => {
  const [content, SetContent] = useState();
  const [title, SetTitle] = useState();
  const access = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const Boastpost = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BASE_URL}boasts`,
        { title, content },
        { headers: { Authorization: access } }
      )
      .then((res) => {
        console.log(res);
        navigate('/boast');
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  };

  return (
    <Container>
      <TitleHeader title={'자랑하기'} />
      <Create
        PostHandler={Boastpost}
        SetContent={SetContent}
        content={content}
        title={title}
        SetTitle={SetTitle}
      />
      ;
    </Container>
  );
};
export default BoastCreate;
