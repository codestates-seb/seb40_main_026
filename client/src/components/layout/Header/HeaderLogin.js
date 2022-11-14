import styled from 'styled-components';

const HeaderLogin = () => {
  return (
    <Container>
      <div>로그인 / 회원가입</div>
    </Container>
  );
};

export default HeaderLogin;

const Container = styled.div`
  > div {
    font-family: 'Dongle', sans-serif;
    font-size: 30px;
    cursor: pointer;
    :hover {
      color: rgb(253, 181, 58);
      border-bottom: 5px rgb(253, 181, 58) solid;
      transition: 0.1s;
    }
  }
`;
