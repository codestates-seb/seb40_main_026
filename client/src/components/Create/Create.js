import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
const Create = () => {
  const navigate = useNavigate();
  const BackClick = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <CreateWrap>
      <form>
        <div className="CreateTop">
          {/* <h3>제목</h3> */}
          <input placeholder="제목을 입력해주세요"></input>
        </div>

        <div className="CreateBot">
          {/* <h3>내용</h3> */}
          <input
            className="ContentInput"
            placeholder="내용을 입력해주세요"
          ></input>
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
export default Create;
