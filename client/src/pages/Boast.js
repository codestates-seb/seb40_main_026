import styled from 'styled-components';
import { tablet, desktop } from '../styles/Responsive';
import Card from '../components/Boast/Card';
import top3 from '../assets/images/top3.png';
import { Link } from 'react-router-dom';

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
    margin: 50px 0px 0px 100px;
    @media ${tablet} {
      font-size: 25px;
    }
  `;

  const TopLogo = styled.img`
    position: relative;
    top: 145px;
    width: 140px;
    @media ${tablet} {
      display: none;
    }

    @media ${desktop} {
      display: none;
    }
  `;

  const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0px 60px 20px 0px;
  `;

  const PostLink = styled(Link)`
    border-radius: 15%;
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-top: 14px;
    cursor: pointer;
    background-color: #ff9fd7;
    color: white;
    box-shadow: 1px 4px 0 rgb(0 0 0 / 12%);
    :active {
      box-shadow: 1px 1px 0 rgb(0 0 0 / 12%);
    }
  `;

  return (
    <>
      <Container>
        <Title>자랑할래요</Title>
        <TopLogo src={top3} alt="logo" />
        <BtnBox>
          <PostLink to="/boastCreate">나도 자랑하기 </PostLink>
        </BtnBox>
        <Card />
      </Container>
    </>
  );
}

export default Boast;
