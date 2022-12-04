import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../api/axios';
import { desktop, mobile, tablet } from '../../styles/Responsive';
import SortBtn from '../Shared/SortBtn';
import Pagination from './Pagination';
import StudyCard from './StudyCard';
import { BASE_URL } from '../../utils/api';
const StudyList = () => {
  const [filterActive, setFilterActive] = useState('All'); //필터링 버튼
  const [data, setData] = useState([]); //axios로 받아온 데이터
  //페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [cardPerPage, setCardPerPage] = useState(6);

  useEffect(() => {
    const sort = filterActive;
    axios
      .get(
        `${BASE_URL}studies${
          sort === 'All' ? `?size=100` : `?sort=${sort}&size=100`
        }`
      )
      .then((res) => {
        console.log('응답', res.data.length);
        setData(res.data);
        setCurrentPage(1);
      })
      .catch((err) => console.log(err));
  }, [filterActive]);

  //get current card
  const indexOfLastCard = currentPage * cardPerPage;
  const indexOfFirstCard = indexOfLastCard - cardPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <StudyListHeader>
        <h1>모여봐요</h1>
        <div>
          <SortBtn
            text={'오프라인'}
            name="offline"
            className={filterActive === 'offline' ? 'active_btn' : null}
            onClick={() => {
              setFilterActive('offline');
            }}
          />
          <SortBtn
            text={'온라인'}
            name="online"
            className={filterActive === 'online' ? 'active_btn' : null}
            onClick={() => setFilterActive('online')}
          />
          <SortBtn
            text={'모두'}
            name="All"
            className={filterActive === 'All' ? 'active_btn' : null}
            onClick={() => setFilterActive('All')}
          />
        </div>
      </StudyListHeader>
      <StudyListBlock>
        {currentCards.map((ele) => (
          <div key={ele.studyId}>
            <Link to={`/study/${ele.studyId}`}>
              <StudyCard
                img={ele.fileUrl}
                studyName={ele.studyName}
                price={ele.price}
                recruitment={ele.recruitment}
                count={ele.count}
                period={ele.period}
                time={ele.time}
              />
            </Link>
          </div>
        ))}
      </StudyListBlock>
      <Pagination
        paginate={paginate}
        cardPerPage={cardPerPage}
        totalPosts={data.length}
      />
    </Container>
  );
};

export default StudyList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;

  /* border: 1px red solid; */
`;

const StudyListBlock = styled.div`
  padding-top: 1rem;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* justify-content: space-between; */
  @media ${desktop} {
    grid-gap: 2rem;
  }
  @media ${tablet} {
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  @media ${mobile} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const StudyListHeader = styled.div`
  width: 70%;
  color: #ffa800;
  margin: auto;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center; //수직 가운데 정렬
  margin-top: 2rem;
  font-size: 0.8rem;
  .active_btn {
    background-color: #ffc149;
  }

  @media ${tablet} {
    /* padding: 1.5rem 0;
  flex-direction: column;
  align-items: center; */
  }
  @media ${mobile} {
    flex-direction: column;
    align-items: center;
    > div {
      margin-top: 1rem;
    }
  }
`;
