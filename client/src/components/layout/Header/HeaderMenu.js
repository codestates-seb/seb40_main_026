import styled from 'styled-components';

const HeaderMenu = () => {
  return (
    <Container>
      <div>궁금해요</div>
      <div>자랑할래요</div>
      <div>친구들</div>
      <div>배울래요</div>
      <div>모여봐요</div>
    </Container>
  );
};

export default HeaderMenu;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    padding: 10px 50px;
    font-size: 35px;
    font-family: 'Dongle', sans-serif;
    cursor: pointer;

    :hover {
      color: rgb(253, 181, 58);
      border-bottom: 5px rgb(253, 181, 58) solid;
      transition: 0.1s;
    }
  }
`;
