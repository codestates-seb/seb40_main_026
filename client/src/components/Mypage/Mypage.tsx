/* eslint-disable import/no-unresolved */
import TitleHeader from '../Shared/TitleHeader';
import MypageMain from './MypageMain';
import CommentCreate from '../Shared/CommentCreate';
import Commentlist from '../Shared/Commentlist';
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { BASE_URL } from '../../utils/api';
import useFetch from 'utils/useFetch';

//멤버 id 띄어야함

//방명록 주인용 id app.js에서 마이페이지 주소 :id로 수정 해야 함.

const MypageContainer = () => {
  const token: any = localStorage.getItem('accessToken');
  const parse: any = token ? jwt_decode(token) : '';
  const UserId = parse.memberId;
  const [content, Setcontent] = useState('');
  const [CommentData, SetCommentData] = useState([]);
  const [Count, SetCount] = useState(false);
  const [UserInfo]: any = useFetch(`members/${UserId}`, token);

  //만약 로컬에 토큰이 있다면 함수 실행
  //함수는

  //회원정보 조회

  //회원탈퇴
  const MemberDeleteHandler = () => {
    axios({
      method: 'post',
      url: `${BASE_URL}members/${UserId}`,
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        SetCount(!Count);
      })
      .catch((err) => {});
  };
  //방명록 post 요청 함수
  const postHandler = () => {
    axios({
      method: 'post',
      url: `${BASE_URL}guestBooks`,
      data: { memberId: UserId, content },
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
      url: `${BASE_URL}guestBooks?memberId=${UserId}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetCommentData(res.data);
    });
  }, [Count]);

  //방명록 수정
  const EditPatch = (id: number) => {
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
  const DeleteHandler = (id: number) => {
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
      <MypageMain
        UserInfo={UserInfo}
        MemberDeleteHandler={MemberDeleteHandler}
      />
      <TitleHeader title={'방명록'} />
      <CommentCreate
        postHandler={postHandler}
        Setcontent={Setcontent}
        token={token}
      />
      <Commentlist
        CommentData={CommentData}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
        Setcontent={Setcontent}
      />
    </>
  );
};
export default MypageContainer;
