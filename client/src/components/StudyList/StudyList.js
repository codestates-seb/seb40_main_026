import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { desktop, mobile, tablet } from '../../styles/Responsive';
import SortBtn from '../Shared/SortBtn';
//import { data } from './data';
import StudyCard from './StudyCard';

const StudyList = () => {
  const [filterActive, setFilterActive] = useState('All');
  const [data, setData] = useState([]);
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/studies`
      )
      .then((res) => {
        console.log('응답', res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const navigate = useNavigate();
  // const handleOnClick = (id) => {
  //   navigate(`/study/${id}`);
  // };

  useEffect(() => {
    filterActive === 'All'
      ? setDatas(data)
      : setDatas(data.filter((item) => item.online === filterActive));
  }, [filterActive, data]);

  return (
    <Container>
      <StudyListHeader>
        <h1>모여봐요</h1>
        <div>
          <SortBtn
            text={'오프라인'}
            name="offline"
            className={filterActive === 'offline' ? 'active_btn' : null}
            onClick={() => setFilterActive('offline')}
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
        {datas.map((ele) => (
          <div key={ele.studyId}>
            {/* <Link to={`/study/${ele.id}`} onClick={() => handleOnClick(ele.id)}> */}
            {/* <Link to={`/study/${ele.id}`}> */}
            <Link to={`/study/${ele.studyId}`}>
              <StudyCard
                img={ele.content}
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
  color: #ffc149;
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
