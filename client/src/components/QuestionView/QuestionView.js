import styled from 'styled-components';
import { useState, useEffect, useMemo } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import DetailView from '../Shared/DetailView';
import { useNavigate, useParams } from 'react-router';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
const QuestionView = ({
  ContentData,
  TitleData,
  SetTitleData,
  SetContentData,
  SetState,
  State,
}) => {
  const [QuesData, SetQuesData] = useState([]);
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  //최초 질문 상세페이지 조회시
  useEffect(() => {
    axios({
      method: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
    }).then((res) => {
      SetQuesData(res.data);
      console.log(res.data);
    });
  }, [State]);
  //질문 수정
  const EditPatch = () => {
    axios({
      method: 'patch',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}`,
      data: { title: TitleData, content: ContentData },
    })
      .then(function (response) {
        SetState(State + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  const LikeHandler = () => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}/like`,
      data: { id },
      headers: { Authorization: token },
    })
      .then(() => {
        SetState(State + 1);
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
      />
    </>
  );
};
export default QuestionView;
