import styled from 'styled-components';

const Container = styled.main`
  border: 1px solid black;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 50px 0px 0px 150px;
`;

function Members() {
  return (
    <Container>
      <Title>친구들</Title>
    </Container>
  );
}

export default Members;
