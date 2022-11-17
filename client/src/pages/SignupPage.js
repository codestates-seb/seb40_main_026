import styled from 'styled-components';
import Signup from '../components/Signup/Signup';

const SignupPage = () => {
  return (
    <Container>
      <Signup />
    </Container>
  );
};

export default SignupPage;

const Container = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
`;
