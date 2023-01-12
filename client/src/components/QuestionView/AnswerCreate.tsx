import styled from 'styled-components';
import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { mobile } from '../../styles/Responsive';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export interface Props {
  State: number;
  SetState: Dispatch<SetStateAction<number>>;
  image: string;
  SetImage: Dispatch<SetStateAction<any>>;
}
const AnswerCreate = ({ State, SetState, image, SetImage }: Props) => {
  const textRef = useRef<Editor>(null);
  const [BodyData, SetBodyData] = useState<any>();
  const [ImgSrc, SetImgSrc] = useState('');
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');

  // const { id } = useParams();
  const handleChangeInput = () => {
    SetBodyData(textRef?.current?.getInstance().getMarkdown().trim());
  };
  const ImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSrc(event.target.files);
    SetImage(event.target.files);
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
  const Answerpost = () => {
    const formData = new FormData();
    if (image) {
      formData.append('image', image);
    }
    formData.append('content', BodyData);
    axios
      .post(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers/${id}`,
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      )

      .then((res) => {
        SetState(State + 1);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <CreateWrap>
      <TitleHeader title={'답변하기'} />
      <CreateView>
        <Createinput>
          {' '}
          <img src={ImgSrc ? ImgSrc : undefined} alt="AnswerImage"></img>
          <input type="file" className="ImgInput" onChange={ImgHandler}></input>
          <Editor
            ref={textRef}
            height="300px"
            initialEditType="wysiwyg"
            initialValue=""
            onChange={handleChangeInput}
          />
        </Createinput>
        <div>
          {' '}
          <button className="CreateBtn" onClick={Answerpost}>
            작성하기
          </button>
        </div>
      </CreateView>
    </CreateWrap>
  );
};
const Createinput = styled.div`
  width: 100%;

  > input {
    margin-bottom: 2rem;
  }
`;
const CreateView = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;

  margin: auto;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  > div {
    .CreateBtn {
      width: 100px;
      padding: 1rem;
      background-color: #ffc149;
      color: #fff;
      border-radius: 1rem;
      margin-top: 1rem;
    }
  }
`;
const CreateWrap = styled.div`
  margin-top: 2rem;
  @media ${mobile};
   {
    .CreateBtn {
      width: 80px;
      padding: 0.5rem;
    }
  }
`;
export default AnswerCreate;
