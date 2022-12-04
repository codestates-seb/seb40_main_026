import styled from 'styled-components';
import cardDefaultImg from '../../assets/images/cardDefaultImg.png';
import recruitmentImg from '../../assets/images/recruitmentImg.png';
import { desktop, mobile, tablet } from '../../styles/Responsive';

const StudyCard = ({ img, count, period, price, recruitment, studyName }) => {
  const onErrorImg = (e) => {
    e.target.src = cardDefaultImg;
  };
  return (
    <Container>
      <CardWrapper>
        <img
          className={count === recruitment ? 'completedImg' : 'nocompletedImg'}
          src={recruitmentImg}
          alt={'cardImg'}
          onError={onErrorImg}
        />
        <img src={img} alt={'cardImg'} onError={onErrorImg} />
      </CardWrapper>
      <TextBlock className={count === recruitment ? 'completedText' : ''}>
        <div>
          <RegisterCondition>
            <div>등록 현황</div>
            <div>{count}</div>
            <div> / </div>
            <div>{recruitment}</div>
          </RegisterCondition>
          <div className="price">
            {/* {count === recruitment ? '모집완료' : ' 모집중'} */}
            {price}0,000원
          </div>
        </div>
        <div className="title">{studyName}</div>
        <div className="date">{period}</div>
      </TextBlock>
    </Container>
  );
};

export default StudyCard;

const Container = styled.div`
  .completedText {
    opacity: 0.5;
  }
  :hover {
    transform: scale(1.1);
  }
  transform: scale(1);
  transition: all 0.5s;
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
  position: relative;

  > img {
    width: 100%;
    height: auto;
    border-radius: 2rem 2rem 0 0;
  }
  .completedImg {
    position: absolute;
    opacity: 0.5;
    margin-bottom: -12.5rem;
  }
  .nocompletedImg {
    display: none;
  }
`;

const TextBlock = styled.div`
  color: gray;
  font-size: 1rem;
  text-align: center;
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    margin: 0 1rem;
    > div.price {
      font-size: 1rem;
    }
  }
  > div.title {
    color: white;
    font-weight: 700;
    justify-content: center;
    font-size: 1.5rem;
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
