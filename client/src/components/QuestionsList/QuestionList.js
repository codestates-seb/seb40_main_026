import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import axios from 'axios';

const QuestionView = ({ SearchData, SearchOn, TitleId }) => {
  // const DummyQuestions = [
  //   {
  //     id: 1,
  //     title: '안녕하세요',
  //     body: '저는 두번째 더미데이터 입니다.',
  //     date: '22.11.14',
  //     nickname: '아구몬',
  //     grade: '답변왕',
  //     class: '🐣',
  //     likeCount: 3,
  //     answerlength: '2',
  //   },
  //   {
  //     id: 2,
  //     title: '안녕하세요',
  //     body: '저는 두번째 더미데이터 입니다.',
  //     date: '22.11.14',
  //     nickname: '파닥몬',
  //     class: '🥚',
  //     likeCount: 1,
  //     answerlength: '5',
  //   },
  //   {
  //     id: 3,
  //     title: '안녕하세요',
  //     body: '저는 세번째 더미데이터 입니다.',
  //     date: '22.11.15',
  //     nickname: '뿔몬',
  //     class: '🐓',
  //     likeCount: 6,
  //     answerlength: '0',
  //   },
  // ];

  const navigate = useNavigate();
  const [QuesData, SetQuesData] = useState([]);
  const [Filter, SetFilter] = useState([]);
  const Titlehandler = (id) => {
    navigate(`/questions/${id}`);
    console.log(id);
  };
  //id===
  useEffect(() => {
    if (TitleId === 3 || 0) {
      SetFilter('questionId');
    } else if (TitleId === 2) {
      SetFilter('likeCount');
    } else {
      SetFilter('answerCount');
    }
  }, [TitleId]);
  console.log(TitleId);
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions?sort=${Filter}`
      )
      .then((res) => {
        SetQuesData(res.data);
      });
  }, [Filter]);
  const LikeHandler = (id) => {
    axios({
      method: 'post',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions/${id}/like`,
      data: id,
      headers: {},
    })
      .then()
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  console.log(QuesData);
  return (
    <QuesListContainer>
      <QuesListMain>
        <QuestionsList>
          {SearchOn
            ? SearchData.map((items) => {
                return (
                  <QuesListWrap key={items.questionId}>
                    <DisplayWrap>
                      <Sectionleft>
                        <h3>
                          <button
                            onClick={() => Titlehandler(items.questionId)}
                          >
                            {items.title}{' '}
                          </button>
                        </h3>
                        <p>{items.content}</p>
                      </Sectionleft>
                      <Sectionright>
                        <div className="AnswerCircle">
                          <div className="Sectionright_span">답변 </div>

                          <span>{items.answerCount}</span>
                        </div>
                      </Sectionright>
                    </DisplayWrap>

                    <SectionBot>
                      <BotUserWrap>
                        <span>{items.date}</span>
                        <span> {items.nickname} </span>
                        <span> {items.class} </span>
                        <span> {items.grade} </span>
                        <span className="mobileAnswer">
                          답변 {items.answerCount}
                        </span>
                      </BotUserWrap>
                      <div>
                        <span className="Likebtn">
                          <LikeButton
                            likeCount={items.likeCount}
                            likeClick={() => LikeHandler(items.id)}
                          />{' '}
                        </span>
                      </div>
                    </SectionBot>
                  </QuesListWrap>
                );
              })
            : QuesData.map((items) => {
                return (
                  <QuesListWrap key={items.questionId}>
                    <DisplayWrap>
                      <Sectionleft>
                        <h3>
                          <button
                            onClick={() => Titlehandler(items.questionId)}
                          >
                            {items.title}{' '}
                          </button>
                        </h3>
                        <p>{items.content}</p>
                      </Sectionleft>
                      <Sectionright>
                        <div className="AnswerCircle">
                          <div className="Sectionright_span">답변 </div>

                          <span>{items.answerCount}</span>
                        </div>
                      </Sectionright>
                    </DisplayWrap>

                    <SectionBot>
                      <BotUserWrap>
                        <span>{items.date}</span>
                        <span> {items.nickname} </span>
                        <span> {items.class} </span>
                        <span> {items.grade} </span>
                        <span className="mobileAnswer">
                          답변 {items.answerCount}
                        </span>
                      </BotUserWrap>
                      <div>
                        <span className="Likebtn">
                          <LikeButton
                            likeCount={items.likeCount}
                            likeClick={() => LikeHandler(items.id)}
                          />{' '}
                        </span>
                      </div>
                    </SectionBot>
                  </QuesListWrap>
                );
              })}
        </QuestionsList>
      </QuesListMain>
    </QuesListContainer>
  );
};

const QuesListContainer = styled.div`
  @media ${mobile} {
    min-width: 400px;
  }
`;
const QuesListMain = styled.div`
  padding-top: 1.5rem;
  border-radius: 1rem;
  padding-bottom: 1.5rem;
`;
const QuestionsList = styled.ul`
  margin: auto;
  width: 70%;

  .Likebtn {
    margin-right: 2.5rem;
  }
`;
const QuesListWrap = styled.li`
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
`;
const DisplayWrap = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Sectionleft = styled.div`
  font-size: 1rem;
  padding: 1rem;
  text-align: left;
  > p {
    margin-top: 1rem;
    font-size: 0.8rem;
  }
  > h3 > button {
    background-color: #fff;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }
  > h3 > button:hover {
    color: grey;
  }
`;
const Sectionright = styled.div`
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
  @media ${mobile} {
    display: none;
  }
`;
const SectionBot = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mobileAnswer {
    display: none;
    @media ${mobile} {
      display: block;
    }
  }
`;
const BotUserWrap = styled.div`
  margin-left: 1rem;
  font-size: 0.8rem;
`;

export default QuestionView;
