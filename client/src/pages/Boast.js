import styled from 'styled-components';
import { tablet, mobile } from '../styles/Responsive';
import Card from '../components/Boast/Card';
import PostBtn from '../components/Shared/PostBtn';
import { Link } from 'react-router-dom';

function Boast() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 70%;
    @media ${tablet} {
    }
    @media ${mobile} {
      width: 90%;
    }
  `;
  const Title = styled.h1`
    margin-bottom: 1rem;
    margin-top: 2rem;
    color: #ffc149;
    @media ${tablet} {
      font-size: 2rem;
    }
    @media ${mobile} {
      font-size: 2.5rem;
    }
  `;

  const TopLogo = styled.div`
    position: relative;
    top: 4.5rem;
    right: 0.1rem;
    width: 10%;
    height: 3.5rem;
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    text-align: center;
    padding-top: 0.7rem;
    font-size: 1.6rem;
    font-weight: bold;
    background-color: #d8d4cc;

    @media ${tablet} {
      font-size: 1.1rem;
      padding-top: 0.2rem;
      height: 2rem;
    }

    @media ${mobile} {
      display: none;
    }
  `;

  const BtnBox = styled(Link)`
    display: flex;
    justify-content: flex-end;
    margin: 0rem 0rem 1.4rem 3rem;
    height: 3rem;
    @media ${tablet} {
    }
  `;
  return (
    <>
      <Container>
        <Title>자랑할래요</Title>
        <TopLogo>Top 3</TopLogo>
        <BtnBox Link to="/boastCreate">
          <PostBtn text="나도 자랑할래요" />
        </BtnBox>
        <Card likeButton={true} />
      </Container>
    </>
  );
}

export default Boast;
