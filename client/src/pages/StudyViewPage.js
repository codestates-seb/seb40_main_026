import styled from 'styled-components';
import StudyView from '../components/StudyView/StudyView';
import { desktop, mobile, tablet } from '../styles/Responsive';

const StudyViewPage = () => {
  return (
    <Container>
      <StudyView />
    </Container>
  );
};

export default StudyViewPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
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
