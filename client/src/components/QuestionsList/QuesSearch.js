import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import { Link } from 'react-router-dom';
import PostBtn from '../Shared/PostBtn';

const QuesSearch = ({ SearchOn, SetSearchOn }) => {
  const [Searchtitle, SetSearchtitle] = useState('');
  const SearchChange = (event) => {
    SetSearchtitle(event.target.value);
    SetSearchOn(!SearchOn);
  };
  console.log(SearchOn);
  return (
    <SearchContainer>
      <Searchwrap>
        <SearchbarWrap>
          <input
            className="Searchinput"
            placeholder="질문을 입력해 주세요."
            onChange={SearchChange}
          ></input>
        </SearchbarWrap>
        <ButtonWrap>
          <Link to="/ask">
            <PostBtn text={'질문하기'} className={'AskBtn'}>
              {' '}
            </PostBtn>
          </Link>
        </ButtonWrap>
      </Searchwrap>
    </SearchContainer>
  );
};
const ButtonWrap = styled.div`
  .AskBtn {
    width: 120px;
    font-size: 1rem;
    border-radius: 1rem;
    margin-right: 0;
    background-color: #ffc149;
    color: #fff;
    padding: 1rem;
  }
  @media ${tablet} {
    margin-right: 0;
    > button {
      width: 100%;
      border-radius: 1rem;
      margin-right: 0;
      background-color: #ffc149;
      color: #fff;
      font-size: 1rem;
      padding: 1rem;
    }
  }
  @media ${mobile} {
    padding: 0rem;
    .AskBtn {
      border-radius: 1rem;
      margin-right: 0;
      background-color: #ffc149;
      color: #fff;
      padding: 1rem;
      font-size: 0.8rem;
    }
  }
`;
const SearchbarWrap = styled.div`
  width: 100%;
  > input {
    box-shadow: grey 0rem 0rem 0.2rem;
    margin-right: 1rem;
    width: 95%;
    padding: 1rem;
    border-radius: 1rem;
  }
  @media ${tablet} {
    width: 80%;
  }
  @media ${mobile} {
    width: 70%;
    > input {
      box-shadow: grey 0px 0px 3px;
      margin-right: 1rem;
      width: 90%;
      border-radius: 1rem;
    }
  }
`;
const Searchwrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  margin-top: 2rem;
`;
const SearchContainer = styled.div`
  a {
    color: #fff;
  }
`;
export default QuesSearch;
