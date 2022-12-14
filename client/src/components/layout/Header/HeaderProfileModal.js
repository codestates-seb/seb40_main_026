import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Kakao } = window;

const HeaderProfileModal = ({ setOpen }) => {
  //const logout = useLogout();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    Kakao.Auth.logout();
    alert('로그아웃되었습니다');
    navigate('/');
    setOpen(false);
    window.location.reload();
  };
  return (
    <Container>
      <button
        onClick={() => {
          navigate('/mypage');
          setOpen(false);
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
  top: 90px;
  right: 50px;
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
    font-size: 1rem;
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
  margin: 1rem;
`;
