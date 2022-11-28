// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { desktop, mobile, tablet } from '../../styles/Responsive';
import SortBtn from '../Shared/SortBtn';
import { data } from './data';
import StudyCard from './StudyCard';

const StudyList = () => {
  const [filterActive, setFilterActive] = useState('All');
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    filterActive === 'All'
      ? setDatas(data)
      : setDatas(data.filter((item) => item.online === filterActive));
  }, [filterActive]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/studies`)
  //     .then((res) => {
  //       console.log('res.data', res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  //const navigate = useNavigate();
  // const handleOnClick = (id) => {
  //   navigate(`/study/${id}`);
  // };

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
          <div key={ele.id}>
            {/* <Link to={`/study/${ele.id}`} onClick={() => handleOnClick(ele.id)}> */}
            {/* <Link to={`/study/${ele.id}`}> */}
            <Link to={`/study/id`}>
              <StudyCard
                img={ele.img}
                title={ele.title}
                price={ele.price}
                total={ele.total}
                registered={ele.registered}
                start={ele.start}
                end={ele.end}
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
    background-color: #ffa800;
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
