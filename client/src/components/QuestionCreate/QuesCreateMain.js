import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import styled from 'styled-components';
const Container = styled.header``;
const QuestionCreate = () => {
  return (
    <Container>
      <TitleHeader title={'질문하기'} />
      <Create />;
    </Container>
  );
};
export default QuestionCreate;
