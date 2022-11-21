import styled from 'styled-components';
const Container = styled.header`
  margin-top: 2rem;
  font-size: 0.8rem;
  .TitleWrap {
    width: 70%;
    color: #ffa800;
    margin: auto;
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid;
  }
`;
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
export default QuestionsHeader;
