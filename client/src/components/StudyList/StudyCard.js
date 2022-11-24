import styled from 'styled-components';
import { desktop, mobile, tablet } from '../../styles/Responsive';

const StudyCard = ({ img, title, price, total, registered, start, end }) => {
  return (
    <Container>
      <CardWrapper>
        <img src={img} alt={'cardImg'} />
      </CardWrapper>
      <TextBlock>
        <div>
          <div>{price}</div>
          <RegisterCondition>
            <div>{registered}</div>
            <span> / </span>
            <div>{total}</div>
          </RegisterCondition>
        </div>
        <div>{title}</div>
        <div>
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
  > img {
    width: 100%;
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
  }
`;

const RegisterCondition = styled.div`
  display: flex;
  > span {
    margin: 0 0.3rem;
  }
`;
