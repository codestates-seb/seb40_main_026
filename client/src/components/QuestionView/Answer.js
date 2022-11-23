import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';

const Answer = () => {
  const DummyQuestions = [
    {
      id: 1,

      body: '답변입니다.',
      date: '2022-11-14',
      nickname: '치즈',
      grade: '답변왕',
      class: '🐣',
      likeCount: 1,
    },
    {
      id: 2,
      body: '답변입니다.',
      date: '2022-11-15',
      nickname: '치킨',
      grade: '답변왕',
      class: '🐣',
      likeCount: 0,
    },
  ];
  return (
    <AnswerView>
      <AnswerViewWrap>
        {DummyQuestions.map((items) => {
          return (
            <AnswerMainWrap key={items.id}>
              <AnswerTop>
                <div>
                  <div className="AnswerUserinfo ">
                    {' '}
                    <span> {items.nickname} </span>
                    <span> {items.grade} </span>
                    <span> {items.class} </span>
                    <span> {items.date} </span>
                  </div>{' '}
                  <BtnWrap>
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </BtnWrap>
                </div>
                <div>
                  <div>
                    <LikeButton likeCount={items.likeCount} />
                  </div>
                </div>
              </AnswerTop>
              <AnswerBot>
                <p>{items.body}</p>
              </AnswerBot>
            </AnswerMainWrap>
          );
        })}
      </AnswerViewWrap>
    </AnswerView>
  );
};
const BtnWrap = styled.div`
  button {
    background-color: #fff;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }
  button:hover {
    color: grey;
  }
`;
const AnswerBot = styled.div`
  margin-top: 1rem;
  @media ${mobile} {
    p {
      font-size: 0.8rem;
    }
  }
`;
const AnswerTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AnswerMainWrap = styled.div`
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1rem;
`;
const AnswerViewWrap = styled.div`
  width: 70%;
  margin: auto;
  padding: 1rem;
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
`;
const AnswerView = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  .AnswerViewWrap {
    .AnswerMainWrap {
      .AnswerTop {
      }
      .AnswerBot {
      }
    }
  }
  @media ${mobile} {
    .AnswerUserinfo > span {
      font-size: 0.8rem;
    }
  }
`;
export default Answer;
