import styled from 'styled-components';

const QuestionsHeader = ({ title }) => {
  return (
    <>
      <Container>
        <div className="TitleWrap">
          <h1>{title}</h1>
        </div>
      </Container>
    </>
  );
};
const Container = styled.header`
  color: #ffa800;
  margin-bottom: 1rem;
  width: 100%;
  margin: auto;
  margin-top: 2rem;
  font-size: 0.8rem;
  padding-bottom: 1rem;
  .TitleWrap {
    width: 70%;
    margin: auto;
    padding-top: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid;
  }
`;
export default QuestionsHeader;
