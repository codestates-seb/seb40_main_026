import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LevelBox from '../components/Members/LevelBox';
import QuestionBox from '../components/Members/QuestionBox';
import AnswerBox from '../components/Members/AnswerBox';
import { tablet, mobile } from '../styles/Responsive';
import TitleHeader from '../components/Shared/TitleHeader';

function Members() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getAllMembers() {
      const res = await axios.get(
        'http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/members'
      );
      let data = res.data;
      setList(data);
      console.log(data);
    }
    try {
      getAllMembers();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 5rem;
    margin-top: 2rem;
  `;
  const ListBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    margin: auto;
    width: 70%;

    @media ${tablet} {
      display: grid;
      grid-template-columns: 1fr;
    }
    @media ${mobile} {
      display: grid;
      grid-template-columns: 1fr;
    }
  `;

  return (
    <Container>
      <TitleHeader title={'친구들'} />
      <ListBox>
        <LevelBox list={list} />
        <QuestionBox list={list} />
        <AnswerBox list={list} />
      </ListBox>
    </Container>
  );
}

export default Members;
