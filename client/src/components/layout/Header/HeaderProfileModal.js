import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useLogout from '../../../hooks/useLogout';

const HeaderProfileModal = ({ setOpen }) => {
  const logout = useLogout();
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logout();
    alert('로그아웃되었습니다');
    setOpen(false);
    //navigate('/');
  };
  return (
    <Container>
      <button
        onClick={() => {
          navigate('/mypage');
        }}
      >
        마이페이지
      </button>
      <HrLine />
      <button onClick={handleLogout}>로그아웃</button>
    </Container>
  );
};

export default HeaderProfileModal;

const Container = styled.div`
  position: absolute;
  top: 110px;
  right: 100px;
  background-color: var(--gold);
  cursor: pointer;
  background-color: var(--gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 45px;
  border-radius: 30px;
  z-index: 1000;
  height: 200px;

  > button {
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    font-weight: 500;
    color: black;
    background-color: var(--gold);
    cursor: pointer;
    padding: 10px 0px;
  }
`;

const HrLine = styled.div`
  border: 5px white solid;
  border-top: 1px;
  height: 1px;
  width: 50px;
  margin: 10px 10px;
`;
