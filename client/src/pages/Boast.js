import styled from 'styled-components';
import { tablet } from '../styles/Responsive';
import Card from '../components/Boast/Card';
import top3 from '../assets/images/top3.png';

function Boast() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 65px;
    @media ${tablet} {
      margin-left: -30px;
    }
  `;
  const Title = styled.h1`
    margin: 30px 0px 0px 100px;
    @media ${tablet} {
      font-size: 25px;
    }
  `;

  const TopLogo = styled.img`
    position: relative;
    top: 170px;
    width: 130px;
    @media ${tablet} {
      display: none;
    }
  `;

  return (
    <>
      <Container>
        <Title>자랑할래요</Title>
        <TopLogo src={top3} alt="logo" />
        <Card />
      </Container>
    </>
  );
}

export default Boast;
