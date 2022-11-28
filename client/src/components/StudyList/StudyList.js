// import axios from 'axios';
// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  //const navigate = useNavigate();
  // const handleOnClick = (id) => {
  //   navigate(`/study/${id}`);
  // };

  return (
    <Container>
      <StudyListHeader />

      <StudyListBlock>
        {data.map((ele) => (
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
