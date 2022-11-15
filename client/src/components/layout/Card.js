import styled from 'styled-components';

function Card() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffc149;
    border-radius: 20px;
    width: 300px;
    height: 240px;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 12%);
    img {
      width: 100%;
      height: 65%;
      border-radius: 20px 20px 0px 0px;
    }
  `;
  const Box = styled.div`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    color: white;
    font-weight: bold;
  `;

  const Box2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 17px 10px 0px 10px;
    color: white;
    font-weight: lighter;
  `;

  const LikeBox = styled.div`
    display: flex;
  `;
  return (
    <>
      <Container>
        <img
          src="https://pbs.twimg.com/media/EyNja1BWUAEpxJh?format=jpg&name=900x900"
          alt="강아지"
        />

        <Box>제목</Box>
        <Box2>
          <div>닉네임</div>
          <LikeBox>좋아요</LikeBox>
        </Box2>
      </Container>
    </>
  );
}

export default Card;
