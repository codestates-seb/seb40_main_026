import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import StudyCard from './StudyCard';

const StudyList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/studies`)
      .then((res) => {
        console.log('res.data', res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <HeaderBlock>
        <h1>모여봐요</h1>
        <div>
          <button>온라인</button>
          <button>오프라인</button>
        </div>
      </HeaderBlock>
      <StudyListBlock>
        {data.map((ele) => (
          <div key={ele.id}>
            <StudyCard
              img={ele.img}
              title={ele.title}
              price={ele.price}
              total={ele.total}
              registered={ele.registered}
              start={ele.start}
              end={ele.end}
            />
          </div>
        ))}
      </StudyListBlock>
    </Container>
  );
};

export default StudyList;

const Container = styled.div`
  padding: 40px;
  height: auto;
  min-height: 100%;
  /* @media ${tablet} {
    background-color: red;
  } */
  @media ${mobile} {
    background-color: green;
  }
  @media ${tablet} {
    background-color: red;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 270px;
  > div > button {
    padding: 10px 20px;
    margin: 0 5px;
    align-items: center;
    //background-color: var(--gold);
    border-radius: 20px;
  }
`;

const StudyListBlock = styled.div`
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
