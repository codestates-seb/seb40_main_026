import styled from 'styled-components';
import StudyList from '../components/StudyList/StudyList';
import { desktop, mobile, tablet } from '../styles/Responsive';

const StudyListPage = () => {
  return (
    <Container>
      <StudyList />
    </Container>
  );
};

export default StudyListPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;
  @media ${desktop} {
    background-color: yellow;
  }
  @media ${tablet} {
    background-color: red;
  }
  @media ${mobile} {
    background-color: green;
  }
`;
