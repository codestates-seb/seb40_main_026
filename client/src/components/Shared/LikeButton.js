import styled from 'styled-components';
import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import axios from 'axios';

const Btn = styled.button`
  background-color: white;
  width: 60px;
  height: 32px;
  border-radius: 30px;
  box-shadow: 1px 4px 0 rgb(0 0 0 / 12%);
  cursor: pointer;

  :active {
    box-shadow: 1px 1px 0 rgb(0 0 0 / 12%);
    position: relative;
    top: 2px;
  }

  .Heart {
    color: #ff62be;
    font-size: 25px;
    position: relative;
    top: 3px;
    right: 6px;
  }
`;

const Count = styled.span`
  color: black;
  font-weight: bold;
  font-size: 19px;
  position: relative;
  bottom: 3px;
`;

function LikeButton({ likeCount, LikeHandler, checkLike }) {
  //LikeCount : 게시글에서 좋아요 눌린 횟수
  //LikeHandler : 좋아요 post요청하는 함수
  //checkLike : 좋아요 누른 여부 (게시글 조회시 response 들어옴)

  return (
    <Btn onClick={LikeHandler}>
      {checkLike ? (
        <AiFillHeart className="Heart" />
      ) : (
        <AiOutlineHeart className="Heart" onClick={LikeHandler} />
      )}
      <Count>{likeCount}</Count>
    </Btn>
  );
}

export default LikeButton;
