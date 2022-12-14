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
  z-index: 0;
  margin: 0 15%;
  @media ${desktop} {
  }
  @media ${tablet} {
    margin: 0 10%;
  }
  @media ${mobile} {
    margin: 0 5%;
  }
`;
