import styled from 'styled-components';
import { desktop, tablet, mobile } from '../../styles/Responsive';
import { useNavigate } from 'react-router';
import LikeButton from '../Shared/LikeButton';
import { Link } from 'react-router-dom';
const QuesListWrap = styled.div`
  .QuesListMain {
    padding-top: 1.5rem;
    border-radius: 1rem;
    padding-bottom: 1.5rem;
    .QuestionsList {
      margin: auto;
      width: 70%;
      .QuestionWrap {
        text-align: center;
        background-color: white;
        border-radius: 1rem;
        margin-top: 2rem;
        padding-bottom: 0.5rem;
        box-shadow: grey 0px 0px 3px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        .DisplayWrap {
          width: 100%;
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .Sectionleft {
            font-size: 1rem;
            padding: 1rem;
            text-align: left;
            > p {
              font-size: 0.8rem;
            }
            > button {
              background-color: #fff;
              font-size: 1.2rem;
              margin-bottom: 1rem;
              cursor: pointer;
            }
            > button:hover {
              color: grey;
            }
          }
          .Sectionright {
            .AnswerCircle {
              width: 80px;
              height: 80px;
              border-radius: 50%;
              background-color: #00d2ff;
              margin-right: 2rem;
              font-size: 1rem;
              color: #fff;
              box-shadow: grey 0px 0px 3px;
              display: flex;
              flex-direction: column;

              justify-content: center;
            }
          }
        }
        .SectionBot {
          width: 100%;
          padding: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .BotUserWrap {
            margin-left: 1rem;
            font-size: 0.8rem;
            .tabletAnswer {
              display: none;
            }
          }
          .Likebtn {
            margin-right: 2.5rem;
          }
        }
      }
    }
  }
  @media ${tablet} {
  }
  @media ${mobile} {
    min-width: 1200px;
    .AnswerCircle {
      display: none;
    }
  }
`;
const QuestionView = () => {
  const DummyQuestions = [
    {
      id: 1,
      title: '안녕하세요',
      body: '저는 두번째 더미데이터 입니다.',
      date: '22.11.14',
      nickname: '아구몬',
      grade: '답변왕',
      class: '🐣',
      likeCount: 3,
      answerlength: '2',
    },
    {
      id: 2,
      title: '안녕하세요',
      body: '저는 두번째 더미데이터 입니다.',
      date: '22.11.14',
      nickname: '파닥몬',
      class: '🥚',
      likeCount: 1,
      answerlength: '5',
    },
    {
      id: 3,
      title: '안녕하세요',
      body: '저는 세번째 더미데이터 입니다.',
      date: '22.11.15',
      nickname: '뿔몬',
      class: '🐓',
      likeCount: 6,
      answerlength: '0',
    },
  ];

  const navigate = useNavigate();
  const Titlehandler = (id) => {
    navigate(`/questions/${id}`);
  };
  return (
    <QuesListWrap>
      <div className="QuesListMain">
        <ul className="QuestionsList">
          {DummyQuestions.map((items) => {
            return (
              <li key={items.id} className="QuestionWrap">
                <div className="DisplayWrap">
                  <div className="Sectionleft">
                    <h3>
                      <Link
                        to="/questions/id"
                        onClick={() => Titlehandler(items.id)}
                      >
                        {items.title}
                      </Link>
                    </h3>
                    <p>{items.body}</p>
                  </div>
                  <div className="Sectionright">
                    <div className="AnswerCircle">
                      <div className="Sectionright_span">답변 </div>

                      <span>{items.answerlength}</span>
                    </div>
                  </div>
                </div>

                <div className="SectionBot">
                  <div className="BotUserWrap">
                    <span className=" tabletAnswer">
                      답변 {items.answerlength}
                    </span>
                    <span>{items.date}</span>
                    <span> {items.nickname} </span>
                    <span> {items.class} </span>
                    <span> {items.grade} </span>
                  </div>
                  <div>
                    <span className="Likebtn">
                      <LikeButton likeCount={items.likeCount} />{' '}
                    </span>
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
