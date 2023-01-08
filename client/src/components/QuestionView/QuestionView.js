import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import DetailView from '../Shared/DetailView';
import { useNavigate, useParams } from 'react-router';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';
const QuestionView = ({
  ContentData,
  TitleData,
  SetTitleData,
  SetContentData,
  SetState,
  State,
}) => {
  const [QuesData, SetQuesData] = useState([]);
  const [checklike, Setchecklike] = useState();
  const [ImgSrc, SetImgSrc] = useState(); //미리보기용
  const [image, Setimage] = useState();
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const ImgHandler = (event) => {
    SetSrc(event.target.files[0]);
    Setimage(event.target.files[0]);
  };
  const SetSrc = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve) => {
      reader.onload = () => {
        SetImgSrc(reader.result); //미리보기,서버에 보내줄 새로운 사진데이터
        resolve();
      };
    });
  };

  //최초 질문 상세페이지 조회시
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
    }).then((res) => {
      SetQuesData(res.data);
      SetImgSrc(res.data.fileUrl);
      SetTitleData(res.data.nickname);
      SetContentData(res.data.content);
    });
  }, [State]);
  //질문 수정

  const EditPatch = () => {
    const formData = new FormData();
    if (image) {
      formData.append('image', image === undefined ? ImgSrc : image);
    }
    formData.append('title', TitleData);
    formData.append('content', ContentData);
    axios
      .patch(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then(function (response) {
        SetState(State + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(ImgSrc, TitleData, ContentData, image);
  const ReportHandler = () => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}/report`,
      data: { id },
      headers: {
        Authorization: token,
      },
    })
      .then(function (response) {
        SetState(State + 1);
      })
      .catch((err) => {
        console.log(err);
      });
    window.alert('신고가 완료 되었습니다.');
  };
  const DeleteHandler = () => {
    axios
      .delete(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((res) => {
        navigate('/questions');
      });
  };
  const LikeHandler = (id) => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}/like`,
      headers: { Authorization: token },
    })
      .then((res) => {
        SetState(State + 1);
        Setchecklike(res.data.like);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <>
      <TitleHeader title={'질문 & 답변'} />
      <DetailView
        Data={QuesData}
        SetTitleData={SetTitleData}
        SetContentData={SetContentData}
        EditPatch={EditPatch}
        DeleteHandler={DeleteHandler}
        LikeHandler={LikeHandler}
        ReportHandler={ReportHandler}
        checkLike={checklike}
        Setimage={Setimage}
        image={image}
        ImgSrc={ImgSrc}
        ImgHandler={ImgHandler}
      />
    </>
  );
};
export default QuestionView;
