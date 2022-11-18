import styled from 'styled-components';
import Card from '../components/Boast/Card';
import { tablet } from '../styles/Responsive';

function Reference() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;

    .toplistbox {
      background: white;
      box-shadow: none;
      > li {
        background-color: #ffc149;
        color: white;
        width: 350px;
        height: 290px;
        font-size: 24px;
      }
    }

    .listbox {
      > li {
        background-color: #ffc149;
        color: white;
        width: 350px;
        height: 290px;
      }
    }
    @media ${tablet} {
      margin-left: -30px;
    }
  `;

  const Title = styled.h1`
    margin: 50px 0px 0px 170px;
    margin-bottom: 70px;
    @media ${tablet} {
      font-size: 25px;
    }
  `;
  return (
    <>
      <Container>
        <Title>배울래요</Title>
        <Card className="toplistbox" classNameA="listbox" />
      </Container>
    </>
  );
}

export default Reference;
