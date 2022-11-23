import Create from '../Create/Create';
import TitleHeader from '../Shared/TitleHeader';
import { mobile } from '../../styles/Responsive';

import styled from 'styled-components';

const QuestionCreate = () => {
  return (
    <Container>
      <TitleHeader className="TitleHeader" title={'질문하기'} />
      <Create />;
    </Container>
  );
};
const Container = styled.header`
  @media ${mobile} {
    .TitleHeader {
      display: none;
    }
  }
`;
export default QuestionCreate;
