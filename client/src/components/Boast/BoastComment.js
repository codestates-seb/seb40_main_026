import BoastCommentlist from '../Shared/BoastCommentlist';
import CommentCreate from '../Shared/CommentCreate';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';
import Pagination from '../StudyList/Pagination';
function BoastComment() {
  const [list, SetList] = useState([]);
  const [content, SetContent] = useState('');
  const [state, SetState] = useState(0);
  const [UserInfo, SetUserInfo] = useState([]);
  const access = localStorage.getItem('accessToken');
  const { id } = useParams();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(3);

  // 댓글 조회
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}boastReplies/${id}?page=1&size=6
      `,
    }).then((res) => {
      SetList(res.data.content);
      setCurrentPage(1);
    });
  }, [state]);

  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = list.slice(indexOfFirstCard, indexOfLastCard);

  // 댓글 작성
  const postHandler = () => {
    axios({
      method: 'post',
      url: `${BASE_URL}boastReplies/${id}`,
      data: { content },
      headers: {
        Authorization: access,
      },
    })
      .then((res) => {
        SetState(!state);
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  // 댓글 수정
  const EditPatch = (id) => {
    axios({
      method: 'patch',
      url: `${BASE_URL}boastReplies/${id}`,
      data: { content },
      headers: {
        Authorization: access,
      },
    })
      .then(function (response) {
        SetState(!state);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 댓글 삭제
  const DeleteHandler = (id) => {
    axios
      .delete(`${BASE_URL}boastReplies/${id}`, {
        headers: {
          Authorization: access,
        },
      })
      .then((res) => {
        SetState(!state);
        console.log(res);
      });
  };

  useEffect(() => {
    axios({
      mathod: 'get',
      url: `${BASE_URL}boastReplies/${id}?page=1&size=6`,
      headers: {
        Authorization: access,
      },
    }).then((res) => {
      SetUserInfo(res.data);
    });
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <CommentCreate postHandler={postHandler} Setcontent={SetContent} />
      <BoastCommentlist
        CommentData={list}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
        SetContent={SetContent}
        currentCards={currentCards}
        UserInfo={UserInfo}
      />
      <Pagination
        paginate={paginate}
        cardPerPage={cardPerPage}
        totalPosts={list.length}
      />
    </>
  );
}

export default BoastComment;
