import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../styles/Responsive';

const QuesListWrap = styled.div`
  .QuesListMain {
    padding-top: 1.5rem;
    border-radius: 1rem;
    padding-bottom: 2rem;

    .QuestionsList {
      margin: auto;

      width: 70%;
      .QuestionWrap {
        text-align: center;

        background-color: white;
        border-radius: 1rem;
        margin-top: 2rem;
        box-shadow: grey 0px 0px 3px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .Sectionleft {
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
          .AnswerCircle {
            width: 100px;
            height: 100px;
            border-radius: 50%;

            background-color: #00c0d1;
            margin-right: 2rem;
            font-size: 1.5rem;
            color: #fff;

            display: flex;
            flex-direction: column;

            justify-content: center;
          }
        }
      }
    }
  }
  @media ${tablet} {
    .Sectionright {
      font-size: 0.1rem;
    }
  }
  @media ${mobile} {
    .Sectionright {
      font-size: 1px;
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
    {
      id: 3,
      title: '안녕하세요',
      body: '저는 세번째 더미데이터 입니다.',
      date: '2022-11-15',
      nickname: '초코',
      thums: '6',
      answerlength: '0',
    },
  ];
  return (
    <QuesListWrap>
      <div className="QuesListMain">
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
                <div className="Sectionright">
                  <div className="AnswerCircle">
                    <div className="Sectionright_span">답변 </div>

                    <span>{items.answerlength}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </QuesListWrap>
  );
};

export default QuestionView;
