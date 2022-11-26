import styled from 'styled-components';
import Card from '../components/Boast/Card';
import TitleHeader from '../components/Shared/TitleHeader';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Boast() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getAllBoasts() {
      const res = await axios.get(
        'http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/boasts'
      );
      let data = res.data;
      setList(data);
      console.log(list);
    }
    try {
      getAllBoasts();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const navigate = useNavigate();
  const handleOnClick = (id) => {
    navigate(`/boasts/${id}`);
  };

  const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 2rem;
  `;

  return (
    <>
      <Container>
        <TitleHeader title={'자랑할래요'} />
        <Link to="/boast/id" onClick={() => handleOnClick(list.memberId)}>
          <Card likeButton={true} />
        </Link>
      </Container>
    </>
  );
}

export default Boast;
