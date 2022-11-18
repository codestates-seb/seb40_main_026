import styled from 'styled-components';
import StudyList from '../components/StudyList/StudyList';

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
`;
