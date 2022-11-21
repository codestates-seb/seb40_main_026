// import axios from 'axios';
// import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { desktop, mobile, tablet } from '../../styles/Responsive';
import { data } from './data';
import StudyCard from './StudyCard';
import StudyListHeader from './StudyListHeader';

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
      <StudyListHeader />

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
  border: 1px red solid;
`;

const StudyListBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${desktop} {
    background-color: red;
  }
  @media ${tablet} {
    background-color: black;
  }
  @media ${mobile} {
    background-color: gray;
  }
  @media ${`screen and (min-width: 1535px)`} {
  }
  @media ${`screen and (min-width: 2000px)`} {
  }
`;
