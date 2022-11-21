import styled from 'styled-components';
import StudyView from '../components/StudyView/StudyView';

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
`;
