//로그인, 회원가입화면에서 주로 쓰는 중간크기 버튼, 색상, 텍스트 변화, 온클릭함수 가능

import styled from 'styled-components';

const MediumButton = ({ text, color, onClick }) => {
  return (
    <ButtonWrapper color={color} onClick={onClick}>
      <button>{text}</button>
    </ButtonWrapper>
  );
};

export default MediumButton;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 10px 50px;
  > button {
    margin: auto;
    width: 200px;
    border-radius: 20px;
    padding: 5px 10px;
    cursor: pointer;
    font-family: 'Dongle', sans-serif;
    font-size: 22px;
    background: ${(props) => (props.color ? props.color : 'pink')};
  }
`;
