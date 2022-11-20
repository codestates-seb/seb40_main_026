import styled from 'styled-components';
import Member from '../components/Members/Member.js';

const Container = styled.main`
  padding: 20px;

  div {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: space-evenly;
    padding: 50px;
  }
`;

const Title = styled.h1`
  margin: 50px 0px 0px 150px;
`;

function Members() {
  return (
    <Container>
      <Title>친구들</Title>
      <div>
        <Member />
      </div>
    </Container>
  );
}

export default Members;
