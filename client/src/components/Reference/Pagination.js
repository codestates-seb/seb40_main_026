import styled from 'styled-components';

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? 'page' : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
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
`;

export default Pagination;
