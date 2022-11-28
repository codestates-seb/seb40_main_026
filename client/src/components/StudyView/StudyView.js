import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsFillClockFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import ScrollToTopBtn from '../Shared/ScrollToTopBtn';
import { data } from './data';
// import Map from './Map';
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
            수업 기간 및 시간
            <span>
              <BsFillClockFill size={15} />
            </span>
          </div>
          <div> 수업 시작하는 날짜 : {data[0].start}</div>
          <div> 수업 끝나는 날짜 : {data[0].end}</div>
          <div> 수업 시간: {data[0].time}</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="2">
            수업 비용
            <span>
              <RiMoneyDollarCircleFill size={20} />
            </span>
          </div>
          <div>1회 수업 3만원(총 6회)</div>
          <div>* 재료비는 별도 안내 예정입니다.</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="3">
            이런 분들이 들으면 좋아요
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <div>코딩에 관심이 있지만 시작하기 어려운 어린이</div>
          <div>친구들과 함께 만드는 것을 좋아하는 어린이</div>
          <div>소프트웨어를 통해 더 넓고 재미있는 세상을 알고 싶은 어린이</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="4">
            수업 문의
            <span>
              <AiFillQuestionCircle size={17} />
            </span>
          </div>
          <div>
            자세한 내용은 아래 전화번호로 연락 주시면 친절하게 알려드립니다.
          </div>
          <div>대표 전화 031-123-1234 </div>
          <div>운영 시간 평일 오전 9:00~12:00, 오후 01:30~05:30</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="5">
            수업 장소
            <span>
              <BiMap size={20} />
            </span>
          </div>
          <div>* 이 수업은 오프라인 수업입니다</div>
          <div>제주 제주시 첨단로 242 스페이스닷원</div>
          {/* <Map /> */}
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
