import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
const AnswerView = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  .AnswerViewWrap {
    width: 70%;
    margin: auto;
    padding: 1rem;
    box-shadow: grey 0px 0px 3px;
    border-radius: 1rem;
    .AnswerMainWrap {
      box-shadow: grey 0px 0px 3px;
      border-radius: 1rem;
      margin-top: 1rem;
      padding: 1rem;
      .AnswerTop {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .btnWrap > button {
          background-color: #fff;
          font-size: 0.8rem;
          margin-right: 0.5rem;
          cursor: pointer;
        }
        .btnWrap > button:hover {
          color: grey;
        }
      }
      .AnswerBot {
        margin-top: 1rem;
      }
    }
  }
`;
const Answer = () => {
  const DummyQuestions = [
    {
      id: 1,

      body: '저는 허니콤보가 너무 맛있어요',
      date: '2022-11-14',
      nickname: '치즈',
      grade: '답변왕',
      class: '🐣',
    },
    {
      id: 2,
      body: '엄마가 사준 치킨이요',
      date: '2022-11-15',
      nickname: '치킨',
      grade: '답변왕',
      class: '🐣',
    },
  ];
  return (
    <AnswerView>
      <div className="AnswerViewWrap">
        {DummyQuestions.map((items) => {
          return (
            <div className="AnswerMainWrap" key={items.id}>
              <div className="AnswerTop">
                <div className="AnswerTopleft">
                  <div
                    className="
                AnswerUserinfo"
                  >
                    {' '}
                    <span> {items.nickname} </span>
                    <span> {items.grade} </span>
                    <span> {items.class} </span>
                    <span> {items.date} </span>
                  </div>{' '}
                  <div className="btnWrap">
                    <button>수정하기</button>
                    <button>삭제하기</button>
                  </div>
                </div>
                <div className="AnswerTopright">
                  <div>
                    <LikeButton />
                  </div>
                </div>
              </div>
              <div className="AnswerBot">
                <p>{items.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </AnswerView>
  );
};
export default Answer;
