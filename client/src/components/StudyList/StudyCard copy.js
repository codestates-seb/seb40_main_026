import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
import { desktop, mobile, tablet } from '../../styles/Responsive';

const StudyCard = ({ img, count, period, price, recruitment, studyName }) => {
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
          <div className="price">
            {count === recruitment ? '모집완료' : ' 모집중'}
          </div>
          <RegisterCondition>
            <div>등록 현황</div>
            <div>{count}</div>
            <div> / </div>
            <div>{recruitment}</div>
          </RegisterCondition>
        </div>
        <div className="title">{studyName}</div>
        <div className="date">{period}</div>
      </TextBlock>
    </Container>
  );
};

export default StudyCard;

const Container = styled.div`
  box-shadow: 0 0.1rem 0.4rem rgb(0 0 0 / 12%);

  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  background-color: #ffc149;
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
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    > div.price {
      font-size: 1rem;
    }
  }
  > div.title {
    font-weight: 700;
    justify-content: center;
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
  font-size: 1rem;
  > span {
    margin: 0 0.3rem;
  }
`;
