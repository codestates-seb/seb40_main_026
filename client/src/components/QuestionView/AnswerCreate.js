import styled from 'styled-components';
import { useState } from 'react';
import { mobile } from '../../styles/Responsive';

const AnswerCreate = () => {
  return (
    <CreateWrap>
      <CreateView>
        <Createinput>
          {' '}
          <textarea placeholder="답변을 입력해주세요."></textarea>
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
  width: 90%;

  > textarea {
    height: 200px;
    padding: 0.5rem;
    margin: auto;
    width: 100%;
    resize: none;
    padding: 1rem;
    box-shadow: grey 0px 0px 3px;
    margin-top: 1rem;
    border-radius: 1rem;
  }
`;
const CreateView = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  justify-content: center;
  box-shadow: grey 0px 0px 3px;
  margin: auto;
  border-radius: 1rem;
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
