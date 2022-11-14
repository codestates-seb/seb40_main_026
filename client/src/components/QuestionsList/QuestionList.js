import styled from 'styled-components';
import Quesfilter from './Questionsfilter';
import QuesSearch from './QuesSearch';
const QuesListWrap = styled.div`
  width: 100%;
  .QuesListMain {
    padding-top: 0.5rem;
    border-radius: 1rem;
    padding-bottom: 2rem;
    box-shadow: grey 0px 0px 3px;
    .QuestionsList {
      width: 1000px;
      margin: auto;

      .QuestionWrap {
        text-align: center;
        display: flex;
        align-items: center;
        width: 100%;

        background-color: white;

        border-radius: 1rem;
        margin-top: 2rem;
        box-shadow: grey 0px 0px 3px;
        .Sectionleft {
          width: 100%;
          font-size: 1.2rem;
          padding: 2rem;
          text-align: left;
          > h3 {
            margin-bottom: 1rem;
          }
          > p {
            margin-bottom: 1rem;
            font-size: 1rem;
          }
          > span {
            font-size: 0.9rem;
          }
        }
        .Sectionright {
          font-size: 1.2rem;
          padding: 2rem;
          border: solid 1px #fff;
          border-radius: 50%;
          margin-right: 2rem;
          color: #fff;
          background-color: #00c0d1;
        }
      }
    }
  }
`;
const QuestionView = () => {
  const DummyQuestions = [
    {
      id: 1,
      title: '안녕하세요',
      body: '저는 더미데이터 입니다.',
      date: '2022-11-14',
      nickname: '초코',
      thums: '3',
      answerlength: '2',
    },
    {
      id: 2,
      title: '안녕하세요',
      body: '저는 두번째 더미데이터 입니다.',
      date: '2022-11-14',
      nickname: '초코',
      thums: '1',
      answerlength: '5',
    },
  ];
  return (
    <QuesListWrap>
      <div className="QuesListMain">
        <QuesSearch />
        <Quesfilter />
        <ul className="QuestionsList">
          {DummyQuestions.map((items) => {
            return (
              <li key={items.id} className="QuestionWrap">
                <div className="Sectionleft">
                  <h3>{items.title}</h3>
                  <p>{items.body}</p>
                  <span>{items.date}</span>
                  <span> {items.nickname}</span>
                  <span> ♥{items.thums}</span>
                </div>
                <div className="Sectionright">답변{items.answerlength}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </QuesListWrap>
  );
};

export default QuestionView;
