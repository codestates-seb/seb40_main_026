import styled from 'styled-components';
import Card from '../components/Boast/Card';
import { tablet, mobile } from '../styles/Responsive';

function Reference() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    @media ${tablet} {
      margin-left: -30px;
    }
    @media ${mobile} {
      margin-left: -80px;
    }

    .toplistbox {
      background: white;
      box-shadow: none;
      > li {
        background-color: #ffc149;
        color: white;
        width: 350px;
        height: 290px;
        font-size: 24px;

        @media ${mobile} {
          width: 600px;
          height: 540px;
          margin: 30px;
        }
        @media ${tablet} {
          width: 500px;
          height: 440px;
          margin: 30px;
        }
      }
    }

    .listbox {
      > li {
        background-color: #ffc149;
        color: white;
        width: 350px;
        height: 290px;

        @media ${mobile} {
          display: flex;
          width: 600px;
          height: 540px;
          margin: 30px;
        }
        @media ${tablet} {
          display: flex;
          width: 500px;
          height: 440px;
          margin: 30px;
        }
      }
    }
  `;

  const Title = styled.h1`
    margin: 50px 0px 0px 170px;
    margin-bottom: 70px;
    @media ${tablet} {
      font-size: 25px;
    }
    @media ${mobile} {
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
