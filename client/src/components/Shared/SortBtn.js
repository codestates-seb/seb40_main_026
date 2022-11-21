//로그인, 회원가입화면에서 주로 쓰는 중간크기 버튼, 색상, 텍스트 변화, 온클릭함수 가능

import styled from 'styled-components';

const SortBtn = ({ className, text, onClick }) => {
  return (
    <Button className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SortBtn;

const Button = styled.button`
  border-radius: 1rem;
  cursor: pointer;
  text-align: center;
  width: 4rem;
  padding: 0.5rem;
  margin: 0.2rem;
  //font-family: 'Dongle', sans-serif;
  font-size: 0.7rem;
`;
