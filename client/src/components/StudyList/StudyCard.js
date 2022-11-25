import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
import { desktop, mobile, tablet } from '../../styles/Responsive';

const StudyCard = ({ img, title, price, total, registered, start, end }) => {
  const onErrorImg = (e) => {
    e.target.src = cardDefaultImg;
  };
  return (
    <Container>
      <CardWrapper>
        <img src={img} alt={'cardImg'} onError={onErrorImg} />
      </CardWrapper>
      <TextBlock>
        <div>
          <div className="price">{price} 만원</div>
          <RegisterCondition>
            <div>등록 현황</div>
            <div>{registered}</div>
            <div> / </div>
            <div>{total}</div>
          </RegisterCondition>
        </div>
        <div className="title">{title}</div>
        <div className="date">
          {start} ~ {end}
        </div>
      </TextBlock>
    </Container>
  );
};

export default StudyCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: pink;
  margin: 0.2rem;
  margin-bottom: 1rem;

  @media ${desktop} {
  }
  @media ${tablet} {
  }
  @media ${mobile} {
  }
`;

const CardWrapper = styled.div`
  overflow: hidden;
  > img {
    width: 100%;
    height: auto;
    border-radius: 2rem 2rem 0 0;
  }
`;

const TextBlock = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    > div.price {
      font-size: 0.7rem;
    }
  }
  > div.title {
    font-weight: 700;
  }
  > div.date {
    justify-content: center;
  }
`;

const RegisterCondition = styled.div`
  > div {
    margin-right: 0.3rem;
  }
  display: flex;
  font-size: 0.6rem;
  > span {
    margin: 0 0.3rem;
  }
`;
