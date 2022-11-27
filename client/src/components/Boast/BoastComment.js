import Commentlist from '../Shared/Commentlist';
import CommentCreate from '../Shared/CommentCreate';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const CommentBox = styled.section``;

function BoastComment(boastId) {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchItem() {
      const res = await axios.get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/boastReplies/${boastId}?page=${page}&size=${size}`
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
    <CommentBox>
      <CommentCreate />
      <Commentlist DummyComments={list} />
    </CommentBox>
  );
}

export default BoastComment;
