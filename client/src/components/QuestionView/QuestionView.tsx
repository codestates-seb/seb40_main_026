import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import DetailView from '../Shared/DetailView';
import { useNavigate, useParams } from 'react-router';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
import { BASE_URL } from '../../utils/api';
interface Prop {
  ContentData: string;
  TitleData: string;
  SetTitleData: Dispatch<SetStateAction<string>>;
  SetContentData: Dispatch<SetStateAction<string>>;
  SetState: Dispatch<SetStateAction<number>>;
  State: number;
}
const QuestionView = ({
  ContentData,
  TitleData,
  SetTitleData,
  SetContentData,
  SetState,
  State,
}: Prop) => {
  const [QuesData, SetQuesData] = useState([]);
  const [checklike, Setchecklike] = useState();
  const [ImgSrc, SetImgSrc] = useState(''); //미리보기용
  const [image, Setimage] = useState<any>();
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const ImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSrc(event.target.files);
    Setimage(event.target.files);
  };
  const SetSrc = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        SetImgSrc(reader.result as string); //미리보기,서버에 보내줄 새로운 사진데이터
        resolve();
      };
    });
  };

  //최초 질문 상세페이지 조회시
  useEffect(() => {
    axios({
      method: 'get',
      url: `${BASE_URL}questions/${id}`,
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
      .patch(`${BASE_URL}questions/${id}`, formData, {
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
  };
  console.log(ImgSrc, TitleData, ContentData, image);
  const ReportHandler = () => {
    axios({
      method: 'post',
      url: `${BASE_URL}questions/${id}/report`,
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
      .delete(`${BASE_URL}questions/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        navigate('/questions');
      });
  };
  const LikeHandler = (id: number) => {
    axios({
      method: 'post',
      url: `${BASE_URL}questions/${id}/like`,
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
