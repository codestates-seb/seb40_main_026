import styled from 'styled-components';

const Pagination = ({ cardPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </div>
      ))}
    </Container>
  );
};

export default Pagination;

const Container = styled.nav`
  width: auto;
  display: flex;
  margin: 1rem;
  align-items: center;
  justify-content: center;
  > div {
    > button {
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
  }
`;
