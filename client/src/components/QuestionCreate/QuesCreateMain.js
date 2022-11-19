import Create from '../Create/Create';
import CreateHeader from './CreateHeader';
import styled from 'styled-components';
const Container = styled.header``;
const QuestionCreate = () => {
  return (
    <Container>
      <CreateHeader />
      <Create />;
    </Container>
  );
};
export default QuestionCreate;
