import BoastCommentlist from '../Shared/BoastCommentlist';
import CommentCreate from '../Shared/CommentCreate';
import PageBtn from '../Shared/PageBtn';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';

function BoastComment() {
  const [list, SetList] = useState([]);
  const [content, SetContent] = useState('');
  const [state, SetState] = useState(0);
  const access = localStorage.getItem('accessToken');
  const { id } = useParams();

  // Pagination
  const location = useLocation();
  const navigate = useNavigate();
  const SIZE = 3; // 첫페이지에서 랜더링되는 카드 갯수

  const updateOffset = (buttonIndex) => {
    const size = 3; // 다른페이지에서 랜더링되는 카드 갯수
    const page = buttonIndex + 1;
    const queryString = `?page=${page}&size=${size}`;

    navigate(`${queryString}`);
  };

  // 댓글 조회
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}boastReplies/${id}${
        location.search || `?page=1&size=${SIZE}`
      }`,
    }).then((res) => {
      SetList(res.data.content);
    });
  }, [location.search, state]);

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

  return (
    <>
      <CommentCreate postHandler={postHandler} Setcontent={SetContent} />
      <BoastCommentlist
        CommentData={list}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
        SetContent={SetContent}
      />
      <PageBtn updateOffset={updateOffset} />
    </>
  );
}

export default BoastComment;
