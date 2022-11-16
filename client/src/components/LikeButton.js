import styled from 'styled-components';
import heart from '../assets/images/heart.png';

const Container = styled.div`
  background-color: white;
  width: 60px;
  height: 32px;
  border-radius: 30px;
  box-shadow: 1px 4px 0 rgb(0 0 0 / 12%);
  cursor: pointer;

  :active {
    box-shadow: 1px 1px 0 rgb(0 0 0 / 12%);
    position: relative;
    top: 2px;
  }
`;

const BtnImg = styled.img`
  width: 28px;
  margin-top: 2px;
  margin-left: 4px;
`;

const Count = styled.span`
  color: black;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 5px;
  position: relative;
  top: -7px;
  left: 7px;
`;

function LikeButton() {
  return (
    <Container>
      <BtnImg src={heart} alt="heart" />
      <Count>3</Count>
    </Container>
  );
}

export default LikeButton;
