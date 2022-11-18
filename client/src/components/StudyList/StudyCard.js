import styled from 'styled-components';

const StudyCard = ({ img, title, price, total, registered, start, end }) => {
  return (
    <Container>
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
  margin: 30px 60px;
  > img {
    width: 300px;
  }
`;

// const St = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin: 30px;
// `;

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
