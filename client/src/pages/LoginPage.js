import styled from 'styled-components';
import Login from '../components/Login/Login';

const LoginPage = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;
