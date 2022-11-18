import styled from 'styled-components';
import { desktop, mobile, tablet } from '../../styles/Responsive';

const StudyCard = ({ img, title, price, total, registered, start, end }) => {
  return (
    <Container>
      <CardWrapper>
        <img src={img} alt={'cardImg'} />
        <TextBlock>
          <div>
            <div>{price}</div>
            <div>{total}</div>
          </div>
          <div>{title}</div>
          <div>
            {start} ~ {end}
          </div>
        </TextBlock>
      </CardWrapper>
    </Container>
  );
};

export default StudyCard;

const Container = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px blue solid;
  width: 300px;
  margin: 20px;
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
  }
`;

const TextBlock = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
`;
