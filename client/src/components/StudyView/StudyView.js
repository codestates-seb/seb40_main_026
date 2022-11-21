import { AiFillQuestionCircle, AiOutlineCalendar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsFillClockFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import MediumButton from '../Shared/MediumButton';
import PostBtn from '../Shared/PostBtn';
import ScrollToTopBtn from '../Shared/ScrollToTopBtn';
import StudyViewButtons from './StudyViewButtons';

const StudyView = () => {
  return (
    <Container>
      <PostBtn />
      <div>
        <StudyViewButtons />
        <MediumButton text={'수강신청 하기'} className="registerBtn" />
      </div>
      <Contents>
        <ContentItem>
          <div className="title" id="0">
            클래스소개
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="1">
            수업 기간
            <span>
              <AiOutlineCalendar />
            </span>
          </div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="2">
            수업 시간
            <span>
              <BsFillClockFill size={15} />
            </span>
          </div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="3">
            수업 비용
            <span>
              <RiMoneyDollarCircleFill size={20} />
            </span>
          </div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="4">
            이런 분들이 들으면 좋아요
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <div>데이터</div>
          <div>데이터</div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="5">
            수업 문의
            <span>
              <AiFillQuestionCircle size={17} />
            </span>
          </div>
          <div>데이터</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="6">
            수업 장소
            <span>
              <BiMap size={20} />
            </span>
          </div>
          <div>지도</div>
        </ContentItem>
      </Contents>
      <ScrollToTopBtn />
    </Container>
  );
};

export default StudyView;

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 17px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    @media ${tablet} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media ${mobile} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  div > .registerBtn {
    width: 200px;
    background-color: gray;
    margin-right: 0;
    @media ${tablet} {
      margin: 20px 0;
    }
    @media ${mobile} {
      margin: 20px 0;
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const ContentItem = styled.div`
  margin-bottom: 30px;
  padding-bottom: 500px;
  > div {
    padding: 20px;
  }
  > div.title {
    border-bottom: 5px gold solid;
    padding: 10px;
    width: 80vw;
    font-weight: 700;
    > span {
      color: gold;
      margin-left: 5px;
    }
  }
`;
