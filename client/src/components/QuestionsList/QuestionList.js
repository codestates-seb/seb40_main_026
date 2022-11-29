import { useNavigate } from 'react-router';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import LikeButton from '../Shared/LikeButton';
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import { FaAngleUp } from 'react-icons/fa';
function QuestionView({ SearchData, SearchOn, TitleId }) {
  const navigate = useNavigate();
  const [QuesData, SetQuesData] = useState([]);
  const [Filter, SetFilter] = useState([]);
  const [Count, SetCount] = useState(1);
  const [Total, SetTotal] = useState();
  const [Loading, SetLoading] = useState(false);

  //상세페이지 네비게이션 연결
  const Titlehandler = (id) => {
    navigate(`/questions/${id}`);
    console.log(id);
  };

  //필터 쿼리 구분용 함수
  useEffect(() => {
    if (TitleId === 3 || 0) {
      SetFilter('questionId');
      SetCount(1);
    } else if (TitleId === 2) {
      SetFilter('likeCount');
      SetCount(1);
    } else if (TitleId === 1) {
      SetFilter('answerCount');
      SetCount(1);
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
        SetQuesData(res.data.slice(0, Count * 5));
        SetTotal(res.data.length);
      });
  }, [Count, Filter]);
  //게시글 더보기 요청시 Count증가 시키는 함수
  const CountHandler = () => {
    if (Total >= Count && Total !== QuesData.length) {
      SetLoading(true);
      setTimeout(() => {
        SetCount(Count + 1);
        SetLoading(false);
      }, 1000);
    }
  };
  //Top버튼 클릭시 스크롤 최상단으로 올려주는 함수
  const TopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
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
              })}
        </QuestionsList>
        <MoreBtnWrap>
          <div className={Loading ? 'LoaderWrap' : 'non-loading'}>
            <PulseLoader color="#ffc149" speedMultiplier={0.7} />
          </div>
          <button
            className={
              Loading || Total === QuesData.length ? 'non-loading' : 'MoreBtn'
            }
            onClick={CountHandler}
          >
            질문 더보기
          </button>
        </MoreBtnWrap>
        <span className="TopNavWrap">
          <button onClick={TopHandler}>
            <div>
              <FaAngleUp></FaAngleUp>
            </div>
            <span>Top</span>
          </button>
        </span>
      </QuesListMain>
    </QuesListContainer>
  );
}

const QuesListContainer = styled.div`
  .TopNavWrap {
    width: 80px;
    text-align: center;
    float: right;
    position: fixed;
    bottom: 50%;
    right: 8%;
    > button {
      padding: 1rem;
      border-radius: 1rem;
      background-color: #ff62be;
      color: #fff;
    }
  }

  @media ${tablet} {
    min-width: 400px;
    .TopNavWrap {
      right: 3%;
    }
  }
  @media ${mobile} {
    min-width: 400px;
    .TopNavWrap {
      right: 1%;
      > button {
        padding: 0;
      }
    }
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
const MoreBtnWrap = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;

  .loader-active {
    display: block;
  }
  .non-loading {
    display: none;
  }
  .MoreBtn {
    padding: 1rem;
    font-size: 1.2rem;
    background-color: #ff62be;
    border-radius: 1rem;
    color: #fff;
  }
  .LoaderWrap {
    width: 100%;

    text-algin: center;
  }
`;
export default QuestionView;
