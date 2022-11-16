import styled from 'styled-components';
const Container = styled.header`
  margin-bottom: 1rem;
  width: 100%;
  margin: auto;

  .TitleWrap {
    width: 70%;
    margin: auto;
    color: #ffc149;
    padding-bottom: 1rem;
  }
`;
const QuestionsHeader = () => {
  return (
    <>
      <Container>
        <div className="TitleWrap">
          <h1>궁금해요</h1>
        </div>
      </Container>
    </>
  );
};
export default QuestionsHeader;
