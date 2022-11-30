import { useNavigate } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { mobile } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import axios from 'axios';

const QuestionView = ({ SearchData, SearchOn, TitleId }) => {
  const navigate = useNavigate();
  const [QuesData, SetQuesData] = useState([]);
  const [Filter, SetFilter] = useState([]);
  const [number, Setnumber] = useState(5);
  const [Scrollheight, SetScrollheight] = useState();
  //스크롤이 바닥에 닿으면 Setnumber(+5) 최댓값은 질문 전체 데이터 길이만큼.
  //if(maxnum=<Setnumber){
  // Setnumber(maxnum)
  //}
  useEffect(() => {}, []);
  console.log(document.body.offsetHeight);
  console.log();
  useEffect(() => {
    Setnumber(number + 5);
  }, [Scrollheight]);

  //상세페이지 네비게이션 연결
  const Titlehandler = (id) => {
    navigate(`/questions/${id}`);
    console.log(id);
  };
  //필터 쿼리 구분용 함수
  useEffect(() => {
    if (TitleId === 3 || 0) {
      SetFilter('questionId');
    } else if (TitleId === 2) {
      SetFilter('likeCount');
    } else if (TitleId === 1) {
      SetFilter('answerCount');
    }
  }, [TitleId]);
  console.log(TitleId);
  //질문 리스트  api요청
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/questions?sort=${Filter}`
      )
      .then((res) => {
        SetQuesData(res.data);
      });
  }, [Filter]);
  //좋아요 요청

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
                          <LikeButton likeCount={items.likeCount} />{' '}
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
                            checkLike={items.checkLike}
                          />{' '}
                        </span>
                      </div>
                    </SectionBot>
                  </QuesListWrap>
                );
              }).slice(0, number)}
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
    text-align: left;
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
