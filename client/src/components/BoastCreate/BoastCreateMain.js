import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';
import { useNavigate } from 'react-router';

const Container = styled.header``;
const BoastCreate = () => {
  const [content, SetContent] = useState();
  const [title, SetTitle] = useState();
  const [image, SetImage] = useState();
  const navigate = useNavigate();
  const access = localStorage.getItem('accessToken');

  const boastpost = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (image) {
      formData.append('image', image);
    }
    formData.append('title', title);
    formData.append('content', content);

    axios
      .post(`${BASE_URL}boasts`, formData, {
        headers: { Authorization: access },
      })
      .then((res) => {
        navigate('/boast');
      })
      .catch((err) => {});
  };

  return (
    <Container>
      <TitleHeader title={'자랑하기'} />
      <Create
        PostHandler={boastpost}
        Setcontent={SetContent}
        content={content}
        SetImage={SetImage}
        title={title}
        Settitle={SetTitle}
      />
      ;
    </Container>
  );
};
export default BoastCreate;
