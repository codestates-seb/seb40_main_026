import styled from 'styled-components';
import DetailView from '../components/Shared/DetailView';
import BoastComment from '../components/Boast/BoastComment';
import TitleHeader from '../components/Shared/TitleHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Container = styled.main`
  margin: auto;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
`;

function BoastDetail() {
  let { boastId } = useParams();

  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchItem() {
      const res = await axios.get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/boasts/${boastId}`
      );
      let data = res.data;
      setList(data);
      console.log(data);
    }
    try {
      fetchItem();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Container>
      <TitleHeader title={'자랑할래요'} />
      <DetailView Data={list} />
      <BoastComment boastId={boastId} />
    </Container>
  );
}

export default BoastDetail;
