import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useState, useRef } from 'react';

const Create = () => {
  const navigate = useNavigate();
  const [BodyData, SetBodyData] = useState();
  const textRef = useRef();
  const BackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const handleChangeInput = () => {
    SetBodyData(textRef.current.getInstance().getMarkdown().trim());
  };
  console.log(BodyData);

  return (
    <CreateWrap>
      <form>
        <div className="CreateTop">
          {/* <h3>제목</h3> */}
          <input placeholder="제목을 입력해주세요"></input>
        </div>

        <div className="CreateBot">
          {/* <h3>내용</h3> */}
          <Editor
            ref={textRef}
            height="500px"
            initialEditType="wysiwyg"
            initialValue=" "
            onChange={handleChangeInput}
          />
        </div>
        <div className="CreateBtnWrap">
          <button className="BackBtn" onClick={BackClick}>
            돌아가기
          </button>
          <button className="CreateBtn">작성하기</button>
        </div>
      </form>
    </CreateWrap>
  );
};
const CreateWrap = styled.div`
  margin-bottom: 1rem;
  form {
    width: 70%;
    margin: auto;
    h3 {
      margin-top: 1rem;
    }
    input {
      width: 100%;
      border-radius: 0.3rem;
      box-shadow: grey 0px 0px 3px;
      padding: 0.8rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .ContentInput {
      height: 50vh;
    }
    .CreateBtnWrap {
      text-align: right;
      > button {
        width: 200px;
        margin-top: 1rem;
        padding: 1rem;
        margin-right: 1rem;
        text-align: center;
        color: #fff;
        border-radius: 2rem;
      }
      .BackBtn {
        background-color: #ff9fd7;
      }
      .CreateBtn {
        background-color: #00d2ff;
      }
    }
  }
`;
export default Create;
