//로그인, 회원가입화면에서 주로 쓰는 중간크기 버튼, 색상, 텍스트 변화, 온클릭함수 가능

import styled from 'styled-components';

const MediumButton = ({ className, text, color, onClick }) => {
  return (
    <Button className={className} color={color} onClick={onClick}>
      {text}
    </Button>
  );
};

export default MediumButton;

const Button = styled.button`
  margin: 15px auto;
  width: 200px;
  border-radius: 20px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 0.8rem;
  text-align: center;
  background: ${(props) => (props.color ? props.color : 'pink')};
`;
