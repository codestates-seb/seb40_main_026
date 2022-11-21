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
  flex-grow: 1;
  max-width: 20rem;
  min-height: 150px;
  flex-basis: 23.5%;
  flex-shrink: 1;
  flex-grow: 1;

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
  padding: 1rem;
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
