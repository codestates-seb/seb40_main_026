import { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Boast/Card';
import { data } from '../components/Reference/data';
import Pagination from '../components/Reference/Pagination';
import TitleHeader from '../components/Shared/TitleHeader';
import { mobile, tablet } from '../styles/Responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${tablet} {
    margin-left: -30px;
  }
  @media ${mobile} {
    margin-left: -80px;
  }

  .Word {
    margin-bottom: 0.5rem;
  }
  .click {
    cursor: not-allowed;
  }
`;

const ListBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2.5rem;
  place-items: center;
  margin: 2rem auto 1.5rem auto;
  width: 70%;

  @media ${tablet} {
  }
  @media ${mobile} {
    grid-template-columns: 1fr;
    padding: 0;
    margin-top: 1.5rem;
  }

  li {
    background-color: #ffc149;
    color: white;

    @media ${mobile} {
      width: 100%;
    }
    @media ${tablet} {
      width: 80%;
    }
  }
`;

function Reference() {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  return (
    <>
      <Container>
        <TitleHeader title={'배울래요'} />
        <ListBox>
          {data.slice(offset, offset + limit).map((item) => {
            return (
              <Card
                key={item.id}
                classNameD="Word"
                classNameA="click"
                title={item.title}
                fileUrl={item.fileUrl}
              />
            );
          })}
        </ListBox>

        <Pagination
          total={data.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </Container>
    </>
  );
}

export default Reference;
