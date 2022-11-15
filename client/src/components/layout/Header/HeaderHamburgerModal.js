import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { tablet } from '../../../styles/Responsive';

const HeaderHamburgerModal = ({ setOpen }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(e.target.value);
    setOpen(false);
  };
  return (
    <Container>
      <button onClick={handleClick} value={'/login'}>
        로그인
      </button>
      <button onClick={handleClick} value={'/signup'}>
        회원가입
      </button>
      <HrLine />
      <button onClick={handleClick} value={'/boast'}>
        자랑할래요
      </button>
      <button onClick={handleClick} value={'/members'}>
        친구들
      </button>
      <button onClick={handleClick} value={'/'}>
        배울래요
      </button>
      <button onClick={handleClick} value={'/study'}>
        모여봐요
      </button>
    </Container>
  );
};

export default HeaderHamburgerModal;

const Container = styled.div`
  position: absolute;
  top: 110px;
  right: 10px;
  background-color: rgb(253, 181, 58);
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${tablet} {
    display: block;
    background-color: rgb(253, 181, 58);
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 45px;
    border-radius: 30px;
  }
  > button {
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: black;
    background-color: rgb(253, 181, 58);
    cursor: pointer;
    padding: 10px 0px;
  }
`;

const HrLine = styled.div`
  border: 5px white solid;
  border-top: 1px;
  height: 1px;
  width: 50px;
  margin: 30px 10px;
`;
