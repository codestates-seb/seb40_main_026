import styled from 'styled-components';
import Member from '../components/Members/Member.js';

const Container = styled.main`
  width: 70%;
  margin: auto;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
  }
`;

const Title = styled.h1`
  margin-bottom: 4rem;
  margin-top: 2rem;
  color: #ffc149;
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
