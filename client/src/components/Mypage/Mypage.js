import TitleHeader from '../Shared/TitleHeader';
import MypageMain from './MypageMain';
import CommentCreate from '../Shared/CommentCreate';
import Commentlist from '../Shared/Commentlist';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

//멤버 id 띄어야함

//방명록 주인용 id app.js에서 마이페이지 주소 :id로 수정 해야 함.

const MypageContainer = () => {
  const [content, Setcontent] = useState('');
  const [CommentData, SetCommentData] = useState([]);
  const [Count, SetCount] = useState(false);
  const [UserInfo, SetUserInfo] = useState([]);
  const token = localStorage.getItem('accessToken');
  const parse = token ? jwt_decode(token) : '';
  const UserId = parse.memberId;
  console.log(parse);
  //만약 로컬에 토큰이 있다면 함수 실행
  //함수는
  //회원정보 조회
  useEffect(() => {
    axios({
      mathod: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/members/${UserId}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetUserInfo(res.data);
    });
  }, []);
  console.log(UserInfo);
  //방명록 post 요청 함수
  const postHandler = () => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBooks`,
      data: { memberId: UserId, content },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        SetCount(!Count);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  //방명록 조회용 함수
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBooks?memberId=${UserId}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetCommentData(res.data);
    });
  }, [Count]);

  //방명록 수정
  const EditPatch = (id) => {
    axios({
      method: 'patch',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBooks/${id}`,
      data: { content },
      headers: {
        Authorization: token,
      },
    })
      .then(function (response) {
        SetCount(!Count);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //방명록 삭제
  const DeleteHandler = (id) => {
    axios
      .delete(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBooks/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        SetCount(!Count);
      });
  };
  return (
    <>
      <TitleHeader title={'회원정보'} />
      <MypageMain UserInfo={UserInfo} />
      <TitleHeader title={'방명록'} />
      <CommentCreate postHandler={postHandler} Setcontent={Setcontent} />
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
