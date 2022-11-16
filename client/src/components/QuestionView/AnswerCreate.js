import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
const CreateWrap = styled.div`
  margin-top: 2rem;
  .CreateView {
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    box-shadow: grey 0px 0px 3px;
    margin: auto;
    border-radius: 0rem;

    > .Createinput {
      width: 90%;
      background-color: #ffc149;
      > input {
        padding: 1rem;
        margin: auto;
        width: 100%;
      }
    }
    > div > button {
      padding: 1rem;
      background-color: #ffc149;
      color: #fff;
    }
  }
`;
const AnswerCreate = () => {
  return (
    <CreateWrap>
      <div className="CreateView">
        <div className="Createinput">
          {' '}
          <input placeholder="답변을 입력해주세요."></input>
        </div>
        <div>
          {' '}
          <button>작성하기</button>
        </div>
      </div>
    </CreateWrap>
  );
};
export default AnswerCreate;