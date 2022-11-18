// import axios from 'axios';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile, tablet } from '../../styles/Responsive';
import { data } from './data';
import StudyCard from './StudyCard';

const StudyList = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/studies`)
  //     .then((res) => {
  //       console.log('res.data', res.data);
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  padding: 30px;
  border: 1px red solid;
`;

const HeaderBlock = styled.div`
  border: 1px red solid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px 300px;
  @media ${tablet} {
    padding: 30px 0px;
    flex-direction: column;
    align-items: center;
  }
  @media ${mobile} {
    padding: 30px 0px;
    flex-direction: column;
    align-items: center;
  }
  > div > button {
    padding: 10px 20px;
    margin: 0 5px;
    align-items: center;
    //background-color: var(--gold);
    border-radius: 20px;
  }
`;

const StudyListBlock = styled.div`
  border: 10px red solid;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: gray;
  @media ${`screen and (min-width: 1377px)`} {
    padding: 0 130px;
  }
  @media ${`screen and (min-width: 1677px)`} {
    padding: 0 250px;
  }
`;
