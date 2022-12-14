import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
import { tablet, mobile } from '../../styles/Responsive';
import { useNavigate } from 'react-router';
import { BASE_URL } from '../../utils/api';
import { useState } from 'react';
import axios from 'axios';

const CardBox = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 2rem;
  box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 12%);
  transform: scale(1);
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
  }
  @media ${mobile} {
    width: 100%;
  }
`;

const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 500px;
  height: 230px;
  border-radius: 2rem 2rem 0rem 0rem;
  box-shadow: 0 0.1rem 0.8rem rgb(0 0 0 / 12%);
  background-size: cover;
  background-position: center;
  cursor: pointer;
  @media ${mobile} {
    width: 500px;
  }
`;

const Word = styled.div`
  margin-left: 0.5rem;
  margin-top: 1rem;
  font-weight: bold;
  font-size: 1.4rem;
  background: #ffc149;
  cursor: pointer;
  @media ${mobile} {
    font-size: 2.3rem;
  }
  @media ${tablet} {
    font-size: 1.3rem;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Word2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 0.5rem 0.2rem 0;
  padding: 0.5rem;
  font-size: 1.1rem;
  color: gray;
  @media ${mobile} {
    font-size: 1.4rem;
  }
  @media ${tablet} {
    font-size: 1rem;
  }

  button {
    margin-bottom: 0.3rem;
  }
`;

const PageBtn = styled.button`
  all: unset;
  border: none;
  background: #ffc149;
  border-radius: 2rem;
`;

function TopCard({
  title,
  nickName,
  LikeButton,
  boastId,
  fileUrl,
  likeCount,
  grade,
}) {
  const [checkLike, SetCheckLike] = useState();
  const [state, SetState] = useState(0);
  const access = localStorage.getItem('accessToken');

  const LikeHandler = (id) => {
    axios({
      method: 'post',
      url: `${BASE_URL}boasts/${id}/like`,
      headers: { Authorization: access },
    })
      .then((res) => {
        SetState(state + 1);
        SetCheckLike(res.data.checkLike);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const onErrorImg = (e) => {
    e.target.src = cardDefaultImg;
  };

  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/boast/${id}`);
  };

  return (
    <CardBox>
      <PageBtn onClick={() => handleOnClick(boastId)}>
        {fileUrl ? (
          <CardImg src={fileUrl} alt={'cardImg'} />
        ) : (
          <CardImg src={''} alt={'cardImg'} onError={onErrorImg} />
        )}
        <Word>{title}</Word>
      </PageBtn>
      <Word2>
        <div>
          {nickName}
          {grade}
        </div>
        <LikeButton
          LikeHandler={() => LikeHandler(boastId)}
          checkLike={checkLike}
          likeCount={likeCount}
        />
      </Word2>
    </CardBox>
  );
}
export default TopCard;
