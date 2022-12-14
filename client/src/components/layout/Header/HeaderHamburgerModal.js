import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, tablet } from '../../../styles/Responsive';

const HeaderHamburgerModal = ({ setOpen }) => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem('accessToken');
  console.log(isLogin);

  const handleClick = (e) => {
    navigate(e.target.value);
    setOpen(false);
  };

  const handleLogout = () => {
    alert('로그아웃하시겠습니까?');
    //로그아웃처리 구현
    localStorage.removeItem('accessToken');
    window.location.reload();
    navigate('/');
    setOpen(false);
    console.log('로그아웃 후', isLogin);
  };
  return (
    <Container>
      {isLogin ? (
        <>
          <button onClick={handleClick} value={'/mypage'}>
            마이페이지
          </button>
          <button onClick={handleLogout}>로그아웃</button>
          <HrLine />
          <button onClick={handleClick} value={'/questions'}>
            궁금해요
          </button>
          <button onClick={handleClick} value={'/boast'}>
            자랑할래요
          </button>
          <button onClick={handleClick} value={'/members'}>
            친구들
          </button>
          <button onClick={handleClick} value={'/contents'}>
            배울래요
          </button>
          <button onClick={handleClick} value={'/study'}>
            모여봐요
          </button>
        </>
      ) : (
        <>
          <button onClick={handleClick} value={'/login'}>
            로그인
          </button>
          <button onClick={handleClick} value={'/signup'}>
            회원가입
          </button>
          <HrLine />
          <button onClick={handleClick} value={'/questions'}>
            궁금해요
          </button>
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
        </>
      )}
    </Container>
  );
};

export default HeaderHamburgerModal;

const Container = styled.div`
  position: absolute;
  top: 90px;
  right: 0.1px;
  background-color: var(--gold);
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  z-index: 1000;

  @media ${tablet} {
    display: block;
    background-color: var(--gold);
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    z-index: 1000;
  }
  @media ${mobile} {
    display: block;
    background-color: var(--gold);
    align-items: center;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 1rem;
    z-index: 1000;
  }
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
  margin: 30px 10px;
`;
