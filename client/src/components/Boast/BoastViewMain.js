import BoastDetailView from '../Shared/BoastDetailView';
import BoastComment from './BoastComment';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';
import jwt_decode from 'jwt-decode';

function BoastViewMain() {
  let { id } = useParams();
  const [titleData, SetTitleData] = useState();
  const [contentData, SetContentData] = useState();
  const [list, SetList] = useState([]);
  const [checkLike, SetCheckLike] = useState();
  const [state, SetState] = useState(0);
  const [image, SetImage] = useState();
  const access = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  const [UserInfo, SetUserInfo] = useState([]);
  const token = localStorage.getItem('accessToken');
  const parse = token ? jwt_decode(token) : '';
  const UserId = parse.memberId;

  // 유저정보 가져오기
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

  // 조회요청
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}boasts/${id}`,
    }).then((res) => {
      SetList(res.data);
      console.log(res.data);
    });
  }, [state]);

  // 수정 요청
  const EditPatch = () => {
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('title', titleData);
    formData.append('content', contentData);
    axios
      .patch(`${BASE_URL}boasts/${id}`, formData, {
        headers: {
          Authorization: access,
        },
      })
      .then(function (response) {
        SetState(state + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 삭제요청

  const DeleteHandler = (id) => {
    axios
      .delete(`${BASE_URL}boasts/${id}`, {
        headers: {
          Authorization: access,
        },
      })
      .then((res) => {
        navigate('/boast');
      });
  };

  // 좋아요 요청
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

  return (
    <>
      <BoastDetailView
        Data={list}
        SetTitleData={SetTitleData}
        SetContentData={SetContentData}
        EditPatch={EditPatch}
        DeleteHandler={DeleteHandler}
        LikeHandler={LikeHandler}
        checkLike={checkLike}
        SetImage={SetImage}
        image={image}
        UserInfo={UserInfo}
      />
      <BoastComment UserInfo={UserInfo} token={token} />
    </>
  );
}

export default BoastViewMain;
