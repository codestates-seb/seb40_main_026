import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { useState, useRef } from 'react';

const Create = ({
  title,
  Settitle,
  content,
  Setcontent,
  PostHandler,
  SetImage,
  image,
}) => {
  const navigate = useNavigate();
  const textRef = useRef();
  const [ImgSrc, SetImgSrc] = useState();
  const BackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };

  const ImgHandler = (event) => {
    SetSrc(event.target.files[0]);
    SetImage(event.target.files[0]);
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

  //내용 저장용 함수
  const handleChangeInput = () => {
    Setcontent(textRef.current.getInstance().getMarkdown().trim());
  };
  //코드 재활용 할 것
  console.log(title, content);

  return (
    <CreateWrap>
      <form>
        <div className="CreateTop">
          {/* <h3>제목</h3> */}
          <input
            placeholder="제목을 입력해주세요"
            onChange={(event) => {
              Settitle(event.target.value);
            }}
          ></input>
        </div>
        <input type="file" className="ImgInput" onChange={ImgHandler}></input>
        {ImgSrc ? <img src={ImgSrc}></img> : null}
        <div className="CreateBot">
          {/* <h3>내용</h3> */}
          <Editor
            ref={textRef}
            height="500px"
            initialEditType="wysiwyg"
            initialValue=" "
            onChange={handleChangeInput}
            toolbarItems={[
              // 툴바 옵션 설정
              ['bold', 'italic', 'strike'],
              ['code', 'codeblock'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task'],
            ]}
          />
        </div>
        <div className="CreateBtnWrap">
          <button className="BackBtn" onClick={BackClick}>
            돌아가기
          </button>
          <button className="CreateBtn" onClick={PostHandler}>
            작성하기
          </button>
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
    img {
      width: 30%;
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
