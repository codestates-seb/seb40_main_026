import TitleHeader from '../Shared/TitleHeader';
import MypageMain from './MypageMain';
import CommentCreate from '../Shared/CommentCreate';
import Commentlist from '../Shared/Commentlist';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';
import Pagination from '../Reference/Pagination';

//멤버 id 띄어야함

//방명록 주인용 id app.js에서 마이페이지 주소 :id로 수정 해야 함.

const FriendInfo = () => {
  const [content, Setcontent] = useState('');
  const [CommentData, SetCommentData] = useState([]);
  const [Count, SetCount] = useState(false);
  const [UserInfo, SetUserInfo] = useState([]);
  const token = localStorage.getItem('accessToken');

  // 페이지네이션
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  //만약 로컬에 토큰이 있다면 함수 실행
  //함수는

  //회원정보 조회

  const { id } = useParams();

  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}members/${id}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetUserInfo(res.data);
      console.log(res.data);
    });
  }, []);

  //방명록 post 요청 함수
  const postHandler = () => {
    axios({
      method: 'post',
      url: `${BASE_URL}guestBooks?memberId=${id}`,
      data: { memberId: id, content },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        SetCount(!Count);
      })
      .catch((err) => {});
  };
  //방명록 조회용 함수
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}guestBooks?memberId=${id}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetCommentData(res.data);
    });
  }, []);

  //방명록 수정
  const EditPatch = (id) => {
    axios({
      method: 'patch',
      url: `${BASE_URL}guestBooks/${id}`,
      data: { content },
      headers: {
        Authorization: token,
      },
    })
      .then(function (response) {
        SetCount(!Count);
      })
      .catch((err) => {});
  };
  //방명록 삭제
  const DeleteHandler = (id) => {
    axios
      .delete(`${BASE_URL}guestBooks/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        SetCount(!Count);
      });
  };
  return (
    <>
      <TitleHeader title={'회원정보'} />
      <MypageMain UserInfo={UserInfo} editButton={false} />
      <TitleHeader title={'방명록'} />
      <CommentCreate
        postHandler={postHandler}
        Setcontent={Setcontent}
        token={token}
      />
      <Commentlist
        CommentData={CommentData.slice(offset, offset + limit)}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
        Setcontent={Setcontent}
      />
      <Pagination
        total={CommentData.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
export default FriendInfo;
