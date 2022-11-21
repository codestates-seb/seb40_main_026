import styled from 'styled-components';
import { tablet, mobile } from '../styles/Responsive';
import Card from '../components/Boast/Card';
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
      width: 100%;
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
      display: none;
    }

    @media ${mobile} {
      display: none;
    }
  `;

  const BtnBox = styled.div`
    display: flex;
    justify-content: flex-end;

    margin: 0rem 0rem 1.4rem 3rem;
    @media ${tablet} {
      margin-right: 10rem;
    }
  `;

  const PostLink = styled(Link)`
    border-radius: 1rem;
    width: 150px;
    height: 50px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding-top: 12px;
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
        <TopLogo>Top 3</TopLogo>
        <BtnBox>
          <PostLink to="/boastCreate">나도 자랑하기 </PostLink>
        </BtnBox>
        <Card likeButton={true} />
      </Container>
    </>
  );
}

export default Boast;
