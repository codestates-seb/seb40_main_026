import TitleHeader from '../Shared/TitleHeader';
import MypageMain from './MypageMain';
import CommentCreate from '../Shared/CommentCreate';
import Commentlist from '../Shared/Commentlist';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
//멤버 id 띄어야함
import jwt_decode from 'jwt-decode';

const token = localStorage.getItem('accessToken');
const decode = jwt_decode(token);
const UserId = decode.memberId;
//방명록 주인용 id app.js에서 마이페이지 주소 :id로 수정 해야 함.
const { id } = useParams;
const MypageContainer = () => {
  const [content, Setcontent] = useState('');
  const [CommentData, SetCommentData] = useState([]);
  const postHandler = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBook`,
      data: { mamberId: 8, content },
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {})
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  //방명록 조회용 함수
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBook?memberId=1`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetCommentData(res.data);
    });
  }, []);
  //방명록 수정
  const EditPatch = () => {
    axios({
      method: 'patch',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBook/{guestBook-id}`,
      data: { content },
      headers: {
        Authorization: token,
      },
    })
      .then(function (response) {})
      .catch((err) => {
        console.log(err);
      });
  };
  //방명록 삭제
  const DeleteHandler = () => {
    axios
      .delete(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/guestBook/{guestBook-id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {});
  };
  console.log(content);
  return (
    <>
      <TitleHeader title={'회원정보'} />
      <MypageMain UserId={UserId} />
      <TitleHeader title={'방명록'} />
      <CommentCreate postHandler={postHandler} Setcontent={Setcontent} />
      <Commentlist
        CommentData={CommentData}
        DeleteHandler={DeleteHandler}
        EditPatch={EditPatch}
      />
    </>
  );
};
export default MypageContainer;
