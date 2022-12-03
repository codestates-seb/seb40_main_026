import styled from 'styled-components';

const PageBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;

  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    background-color: white;
    color: #ffc149;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    :hover {
      background-color: #ffc149;
      color: white;
    }
    :focus {
      background-color: #ffc149;
      color: white;
    }
  }
`;

function PageBtn({ updateOffset }) {
  return (
    <PageBox>
      <button onClick={() => updateOffset(0)}>1</button>
      <button onClick={() => updateOffset(1)}>2</button>
      <button onClick={() => updateOffset(2)}>3</button>
      <button onClick={() => updateOffset(3)}>4</button>
      <button onClick={() => updateOffset(4)}>5</button>
    </PageBox>
  );
}

export default PageBtn;
