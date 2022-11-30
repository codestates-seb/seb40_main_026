import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { mobile } from '../../styles/Responsive';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const AnswerCreate = ({ State, SetState }) => {
  const textRef = useRef();
  const [BodyData, SetBodyData] = useState();
  const { id } = useParams();
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  // const { id } = useParams();
  const handleChangeInput = () => {
    SetBodyData(textRef.current.getInstance().getMarkdown().trim());
  };
  const Answerpost = () => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/answers`,
      data: { questionId: id, content: BodyData },
      headers: { Authorization: token },
    })
      .then(() => {
        navigate(`/questions/${id}`);
        SetState(State + 1);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  console.log(BodyData);
  return (
    <CreateWrap>
      <TitleHeader title={'답변하기'} />
      <CreateView>
        <Createinput>
          {' '}
          <Editor
            ref={textRef}
            height="300px"
            initialEditType="wysiwyg"
            initialValue=" "
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
  margin-top: 1rem;
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
