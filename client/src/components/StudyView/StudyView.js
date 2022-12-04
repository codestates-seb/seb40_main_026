import { useEffect, useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { BsFillClockFill, BsFillSuitHeartFill } from 'react-icons/bs';
import { MdTagFaces } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/axios';
import { mobile, tablet } from '../../styles/Responsive';
import ScrollToTopBtn from '../Shared/ScrollToTopBtn';
import Map from './Map';
import StudyViewButtons from './StudyViewButtons';

const StudyView = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  let mapLocation = data.place;
  if (data.online === 'online') {
    mapLocation = '서울특별시 서초구 서초동 서초대로 396';
  }
  console.log('mapLocation', mapLocation);
  let count = data.count;
  let recruitment = data.recruitment;

  useEffect(() => {
    axios
      .get(`/studies/${id}`)
      .then((res) => {
        console.log('응답', res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <Container>
      <StudyViewButtons count={count} recruitment={recruitment} />

      <Contents>
        <ContentItem>
          <div className="title" id="0">
            클래스소개
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <ClassIntro>
            <img src={data.fileUrl} alt="img" />
            <div>
              <div className="classInfo">{data.content}</div>
              <div className="subTilte">
                이런 분들이 들으면 좋아요
                <span>
                  <BsFillSuitHeartFill size={15} />
                </span>
              </div>
              <div>
                {data.recommendation?.split('\n').map((ele, idx) => (
                  <div key={idx} className="content">
                    <span>
                      <MdTagFaces size={15} />
                    </span>
                    {ele}
                  </div>
                ))}
              </div>
            </div>
          </ClassIntro>
        </ContentItem>

        <ContentItem>
          <div className="title" id="1">
            모집인원
            <span>
              <BsFillSuitHeartFill size={15} />
            </span>
          </div>
          <div>총 모집인원 : {data.recruitment}</div>
          <div>신청 완료한 인원 : {data.count}</div>
          <div>현재 신청 가능한 인원 : {data.recruitment - data.count}</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="2">
            수업 기간 및 시간
            <span>
              <BsFillClockFill size={15} />
            </span>
          </div>
          <div> 수업 기간 : {data.period}</div>
          <div> 수업 시간 : {data.time}</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="3">
            수업 비용
            <span>
              <RiMoneyDollarCircleFill size={20} />
            </span>
          </div>
          <div>1회 수업 {data.price}만원(총 6회)</div>
          <div>* 재료비는 별도 안내 예정입니다.</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="4">
            수업 문의
            <span>
              <AiFillQuestionCircle size={17} />
            </span>
          </div>
          {/* <div>
            자세한 내용은 아래 전화번호로 연락 주시면 자세하게 알려드립니다.
          </div>
          <div>대표 전화 031-123-1234 </div>
          <div>운영 시간 평일 오전 9:00~12:00, 오후 01:30~05:30</div> */}
          <div className="contact">{data.contact}</div>
        </ContentItem>

        <ContentItem>
          <div className="title" id="5">
            수업 장소
            <span>
              <BiMap size={20} />
            </span>
          </div>
          {data.online === 'online' ? (
            <div>
              <div className="mapInfo">* 이 수업은 온라인 수업입니다.</div>
              <div className="mapInfo">
                특별수업 시 아래의 장소에서 진행될 예정입니다.
              </div>
              <div className="mapInfo">
                장소: 서울특별시 서초구 서초동 서초대로 396 코드스테이츠
              </div>
              <Map mapLocation={mapLocation} className="map" />
            </div>
          ) : (
            <div>
              <div className="mapInfo">* 이 수업은 오프라인 수업입니다.</div>
              <div className="mapInfo">수업 장소 : {data.place}</div>
              <Map mapLocation={mapLocation} className="mapImg" />
            </div>
          )}
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
  .contact {
    white-space: pre-wrap;
    line-height: 2rem;
  }
  margin-bottom: 30px;
  padding-bottom: 4rem;
  .mapInfo {
    margin: 1rem 0;
    .map {
      margin: 1rem;
      padding: 1rem;
    }
  }
  /* .mapImg {
    width: 100%;
  } */

  > div {
    padding: 20px;
  }
  > div.title {
    border-bottom: 5px #ffc149 solid;
    width: 100%;
    font-weight: 700;
    @media ${tablet} {
      width: 100%;
    }
    @media ${mobile} {
      width: 100%;
    }
    display: flex;
    > span {
      color: #ffc149;
      margin-left: 5px;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;

const ClassIntro = styled.div`
  .classInfo {
    padding: 1rem 0;
    line-height: 1.5rem;
  }
  .test {
    color: red;
    white-space: pre-wrap;
    padding: 1rem 0;
    line-height: 2rem;
  }
  display: flex;
  > img {
    margin: 1rem 0;
    max-width: 50%;
    height: 100%;
    @media ${tablet} {
      max-width: 100%;
      height: auto;
    }
    @media ${mobile} {
      max-width: 100%;
      height: auto;
    }
  }
  > div {
    margin: 1rem 3rem;
    .subTilte {
      margin: 1rem 0;
      font-weight: 900;
    }
    .content {
      padding-bottom: 1rem;
      > span {
        padding-right: 0.5rem;
        color: #ffc149;
      }
    }
  }
  @media ${tablet} {
    flex-direction: column;
  }
  @media ${mobile} {
    flex-direction: column;
  }
`;
