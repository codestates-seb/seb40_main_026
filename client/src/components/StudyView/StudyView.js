import { AiFillQuestionCircle, AiOutlineCalendar } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsFillClockFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import ScrollToTopBtn from '../Shared/ScrollToTopBtn';
import { data } from './data';
import KakaoMap from './KakaoMap';
import StudyViewButtons from './StudyViewButtons';

const StudyView = () => {
  return (
    <Container>
      <StudyViewButtons />

      <Contents>
        <ContentItem>
          <div className="title" id="0">
            클래스소개
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <div>{data[0].intro}</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="1">
            수업 기간
            <span>
              <AiOutlineCalendar />
            </span>
          </div>
          <div> 수업 시작하는 날짜 : {data[0].start}</div>
          <div> 수업 끝나는 날짜 : {data[0].end}</div>
          <div>달력api</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="2">
            수업 시간
            <span>
              <BsFillClockFill size={15} />
            </span>
          </div>
          <div>{data[0].time}</div>
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
          <KakaoMap
            markerPositions={[33.452278, 126.567803]}
            size={[400, 400]}
          />
        </ContentItem>
      </Contents>
      <ScrollToTopBtn />
    </Container>
  );
};

export default StudyView;

const Container = styled.div`
  margin-top: 2rem;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Contents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const ContentItem = styled.div`
  margin-bottom: 30px;
  padding-bottom: 300px;
  > div {
    padding: 20px;
  }
  > div.title {
    border-bottom: 5px gold solid;
    width: 100%;
    font-weight: 700;
    @media ${tablet} {
      width: 100%;
    }
    @media ${mobile} {
      width: 100%;
    }
    > span {
      color: gold;
      margin-left: 5px;
    }
  }
`;
