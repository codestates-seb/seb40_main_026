import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useState, useRef } from 'react';
export interface Prop {
  Settitle: any;
  Setcontent: any;
  SetImage: any;
  PostHandler: any;
}

const Create = ({ Settitle, Setcontent, SetImage, PostHandler }: Prop) => {
  const navigate = useNavigate();
  const textRef = useRef<Editor>(null);
  const [ImgSrc, SetImgSrc] = useState<string | null>();
  const BackClick = (event: React.FormEvent) => {
    event.preventDefault();
    navigate(-1);
  };
  //서버 열리면 테스트 해볼것.
  const ImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSrc(event.target.files);
    SetImage(event.target.files);
  };
  const SetSrc = (file: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    //테스트해보고 다시 수정할것.
    return new Promise((resolve: any) => {
      reader.onload = () => {
        SetImgSrc(reader.result as string); //미리보기,서버에 보내줄 새로운 사진데이터
        resolve();
      };
    });
  };

  //내용 저장용 함수
  const handleChangeInput = () => {
    Setcontent(textRef?.current?.getInstance().getMarkdown().trim());
  };

  return (
    <CreateWrap>
      <form>
        <div className="CreateTop">
          <input
            placeholder="제목을 입력해주세요"
            onChange={(event) => {
              Settitle(event.target.value);
            }}
          ></input>
        </div>
        <input type="file" className="ImgInput" onChange={ImgHandler}></input>
        {ImgSrc ? <img alt="userimage" src={ImgSrc}></img> : null}
        <div className="CreateBot">
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
