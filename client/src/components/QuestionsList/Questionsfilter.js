import { useState } from 'react';
import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';

const Filterwrap = styled.div`
  background-color: black;
  margin-top: 1rem;

  .filter-main {
    margin: auto;
    width: 70%;
    background-color: blue;
    > span > button {
      float: right;
      padding: 0.8rem;
      margin-right: 0.5rem;
      margin-bottom: 0.5rem;
      color: #fff;
      background-color: #d8d4cc;
      border-radius: 2rem;
    }
    > span {
      .yellow {
        background-color: #ffc149;
      }
    }
  }
`;
const Quesfilter = () => {
  const [TitleId, setTitleId] = useState(3);
  const filterdata = [
    {
      id: 1,
      title: '답변순',
    },
    {
      id: 2,
      title: '추천순',
    },
    {
      id: 3,
      title: '최신순',
    },
  ];
  const filterOn = (id) => {
    if (id === TitleId) {
      setTitleId(0);
    } else {
      setTitleId(id);
    }
  };
  //onclick?Clasname =yellow
  return (
    <Filterwrap>
      <div className="filter-main">
        {filterdata.map((items) => {
          return (
            <span key={items.id}>
              <button
                onClick={() => filterOn(items.id)}
                className={items.id === TitleId ? 'yellow' : null}
              >
                {items.title}
              </button>
            </span>
          );
        })}
      </div>
    </Filterwrap>
  );
};
export default Quesfilter;
