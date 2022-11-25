import styled from 'styled-components';
import { useState, useRef } from 'react';
import { mobile } from '../../styles/Responsive';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import TitleHeader from '../Shared/TitleHeader';
const AnswerCreate = () => {
  const textRef = useRef();
  const [BodyData, SetBodyData] = useState();
  const handleChangeInput = () => {
    SetBodyData(textRef.current.getInstance().getMarkdown().trim());
  };
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
          <button className="CreateBtn">작성하기</button>
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
