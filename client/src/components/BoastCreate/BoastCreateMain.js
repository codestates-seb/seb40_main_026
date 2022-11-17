import Create from '../Create/Create';
import BoastCreateHeader from './BoastCreateHeader';
import styled from 'styled-components';
const Container = styled.header``;
const BoastCreate = () => {
  return (
    <Container>
      <BoastCreateHeader />
      <Create />;
    </Container>
  );
};
export default BoastCreate;
