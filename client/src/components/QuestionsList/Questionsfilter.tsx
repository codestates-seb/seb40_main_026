import { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import SortBtn from '../Shared/SortBtn';

interface Prop {
  TitleId: number;
  SetTitleId: Dispatch<SetStateAction<number>>;
}
const Quesfilter = ({ TitleId, SetTitleId }: Prop) => {
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
  const filterOn = (id: number) => {
    if (id === TitleId) {
      SetTitleId(0);
    } else {
      SetTitleId(id);
    }
  };
  //onclick?Clasname =yellow
  return (
    <Filterwrap>
      <FilterMain>
        {filterdata.map((items) => {
          return (
            <span key={items.id}>
              <SortBtn
                text={items.title}
                className={items.id === TitleId ? 'yellow' : null}
                onClick={() => filterOn(items.id)}
              />
            </span>
          );
        })}
      </FilterMain>
    </Filterwrap>
  );
};
const FilterMain = styled.div`
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
`;
const Filterwrap = styled.div`
  background-color: black;
  margin-top: 1rem;
`;
export default Quesfilter;
