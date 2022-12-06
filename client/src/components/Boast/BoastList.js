import TopCard from './TopCard';
import Card from './Card';
import { BASE_URL } from '../../utils/api';
import LikeButton from '../Shared/LikeButton';
import PostBtn from '../Shared/PostBtn';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Pagination from '../StudyList/Pagination';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: auto;
  width: 70%;
`;

const TopLogo = styled.div`
  width: 10%;
  height: 3.5rem;
  border-radius: 0.8rem 0.8rem 0rem 0rem;
  text-align: center;
  padding-top: 0.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #d8d4cc;

  @media ${tablet} {
    font-size: 1.1rem;
    padding-top: 0.2rem;
    height: 2rem;
  }

  @media ${mobile} {
    display: none;
  }
`;

const BtnBox = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin: 2rem 0rem 0.4rem 3rem;
`;

const TopListBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 12%);
  background: #f7f7f7;
  border-radius: 0rem 2rem 2rem 2rem;
  grid-gap: 2rem;
  padding: 2rem;
  width: 100%;

  @media ${tablet} {
    grid-gap: 0rem;
  }

  @media ${mobile} {
    grid-template-columns: 1fr;
    background: white;
    box-shadow: none;
    padding: 2.3rem 0 0 0;
  }

  li {
    color: white;
    background-color: #ffc149;

    @media ${mobile} {
      width: 100%;
    }
    @media ${tablet} {
      width: 80%;
    }
  }
`;

const ListBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  margin-top: 3rem;
  width: 100%;
  @media ${tablet} {
  }
  @media ${mobile} {
    grid-template-columns: 1fr;
    padding: 0;
    margin-top: 1.5rem;
  }

  button {
    background: white;
  }

  li {
    background-color: white;
    color: black;
    margin: 1.5rem;

    @media ${mobile} {
      width: 100%;
    }
    @media ${tablet} {
      width: 80%;
    }
  }
`;

function BoastList() {
  // axios
  const [list, SetList] = useState([]);
  const [topList, SetTopList] = useState([]);
  const [state, SetState] = useState(0);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = list.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // 멀티 리퀘스트
  useEffect(() => {
    axios
      .all([
        axios.get(`${BASE_URL}boasts/populars`),
        axios.get(`${BASE_URL}boasts?page=1&size=100`),
      ])
      .then(
        axios.spread((res1, res2) => {
          console.log(res1, res2);
          SetTopList(res1.data);
          SetList(res2.data);
          setCurrentPage(1);
        })
      )
      .catch((err) => console.log(err));
  }, [state]);

  return (
    <Container>
      <BtnBox Link to="/boastCreate">
        <PostBtn text="자랑하기" />
      </BtnBox>
      <TopLogo>Top 3</TopLogo>
      <TopListBox>
        {topList.map((item) => {
          return (
            <TopCard
              key={item.boastId}
              title={item.title}
              nickName={item.nickName}
              LikeButton={LikeButton}
              boastId={item.boastId}
              grade={item.grade}
              fileUrl={item.fileUrl}
              likeCount={item.likeCount}
            />
          );
        })}
      </TopListBox>

      <ListBox>
        {currentCards.map((item) => {
          return (
            <Card
              likeButton={true}
              title={item.title}
              nickName={item.nickName}
              LikeButton={LikeButton}
              boastId={item.boastId}
              grade={item.grade}
              key={item.boastId}
              fileUrl={item.fileUrl}
              likeCount={item.likeCount}
              clickable={true}
            />
          );
        })}
      </ListBox>

      <Pagination
        paginate={paginate}
        cardPerPage={cardPerPage}
        totalPosts={list.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  );
}

export default BoastList;
