import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';

const Question = styled.div`
  width: 100%;

  .QuesViewWrap {
    width: 70%;
    margin: auto;
    border-radius: 1rem;
    padding: 1.2rem;
    box-shadow: grey 0px 0px 3px;
    > div {
    }
    .QuesTitle {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .UserWrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      margin-bottom: 3rem;
      color: grey;
      .Workbtn {
        float: right;

        > button {
          padding: 0.5rem;
          margin-left: 0.5rem;
          background-color: #fff;
          box-shadow: grey 0px 0px 3px;
          border-radius: 2rem;
        }
      }
    }
    .Article {
      font-size: 1.3rem;
    }
  }
`;
const QuestionView = () => {
  const DummyQuestions = [
    {
      id: 1,
      title: '안녕하세요 세상에 제일 맛있는 치킨은 무엇인가요?',
      body: '안녕하세요 저는 치킨을 좋아하는 초등학생인데요, 원래는 뿌링클을 좋아했지만 이제는 너무 물려서 못먹겠어요 세상에서 제일 맛있는 치킨을 추천해주세요!',
      date: '2022-11-14',
      nickname: '초코',
      grade: '질문왕',
      class: '🐣',
      level: '🎖',
      thums: '3',
      answerlength: '2',
    },
  ];
  console.log(DummyQuestions.title);
  return (
    <>
      <Question>
        <section className="QuesViewWrap">
          {DummyQuestions.map((items) => {
            return (
              <div key={items.id}>
                <div>
                  <h3 className="QuesTitle">{items.title}</h3>
                </div>
                <div className="UserWrap">
                  <div className="Userinfo">
                    <span> {items.nickname} </span>
                    <span> {items.grade} </span>
                    <span> {items.class} </span>
                    <span> {items.level} </span>
                    <span> {items.date} </span>
                  </div>
                  <div className="Workbtn">
                    <button> 수정하기 </button>
                    <button> 삭제하기 </button>
                    <button> 신고하기 </button>
                  </div>
                </div>
                <div className="Article">
                  <p>{items.body}</p>
                </div>
              </div>
            );
          })}
        </section>
      </Question>
    </>
  );
};
export default QuestionView;
