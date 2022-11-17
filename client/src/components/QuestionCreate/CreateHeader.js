import styled from 'styled-components';
const Container = styled.header`
  margin-bottom: 1rem;
  width: 100%;
  margin: auto;
  margin-top: 1rem;
  .TitleWrap {
    width: 70%;
    color: #ffc149;
    margin: auto;
    padding-bottom: 1rem;
  }
`;
const CreateHeader = () => {
  return (
    <>
      <Container>
        <div className="TitleWrap">
          <h1>질문하기</h1>
        </div>
      </Container>
    </>
  );
};
export default CreateHeader;
