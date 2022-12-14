import styled from 'styled-components';

const Pagination = ({
  cardPerPage,
  totalPosts,
  paginate,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / cardPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <div key={number}>
          <button onClick={() => paginate(number)}>{number}</button>
        </div>
      ))}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === Math.ceil(totalPosts / cardPerPage)}
      >
        &gt;
      </button>
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
