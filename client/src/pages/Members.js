import styled from 'styled-components';
import MemberList from '../components/Members/MemberList.js';

const Container = styled.main`
  width: 70%;
  margin: auto;
  padding-bottom: 5rem;
`;
const ListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
      <ListBox>
        <MemberList />
      </ListBox>
    </Container>
  );
}

export default Members;
