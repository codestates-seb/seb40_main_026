import styled from 'styled-components';
import { useState } from 'react';
import { tablet, mobile } from '../../styles/Responsive';
import { Link } from 'react-router-dom';

const Searchwrap = styled.div`
  a {
    color: #fff;
  }
  .Searchwrap {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    margin-top: 2rem;

    .SearchbarWrap {
      width: 900px;

      > input {
        box-shadow: grey 0px 0px 3px;
        margin-bottom: 10px;
        margin-right: 1rem;
        width: 90%;
        padding: 1rem;
        border-radius: 1rem;
      }
    }
    .ButtonWrap {
      > button {
        width: 150px;
        font-size: 1.5rem;
        border-radius: 1rem;
        margin-right: 0;
        background-color: #ffc149;
        color: #fff;
        padding: 1rem;
      }
    }
    @media ${tablet} {
      .SearchbarWrap {
        width: 70%;
        > input {
          box-shadow: grey 0px 0px 3px;

          width: 90%;

          border-radius: 1rem;
        }
      }
      .ButtonWrap {
        margin-right: 0;

        > button {
          width: 100%;
          border-radius: 1rem;
          margin-right: 0;
          background-color: #ffc149;
          color: #fff;
          font-size: 1rem;
        }
      }
    }
    @media ${mobile} {
      .SearchbarWrap {
        width: 70%;
        > input {
          box-shadow: grey 0px 0px 3px;

          margin-right: 1rem;
          width: 90%;

          border-radius: 1rem;
        }
      }
      .ButtonWrap {
        .QuesBtn {
          width: 100%;
          border-radius: 1rem;
          margin-right: 0;
          background-color: #ffc149;
          color: #fff;
          padding: 1rem;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
const QuesSearch = ({ SearchOn, SetSearchOn }) => {
  const [Searchtitle, SetSearchtitle] = useState('');
  const SearchChange = (event) => {
    SetSearchtitle(event.target.value);
    SetSearchOn(!SearchOn);
  };
  console.log(SearchOn);
  return (
    <Searchwrap>
      <div className="Searchwrap">
        <div className="SearchbarWrap">
          <input
            className="Searchinput"
            placeholder="질문을 입력해 주세요."
            onChange={SearchChange}
          ></input>
        </div>
        <div className="ButtonWrap">
          <button className="QuesBtn">
            {' '}
            <Link to="/ask">질문하기 </Link>
          </button>
        </div>
      </div>
    </Searchwrap>
  );
};
export default QuesSearch;
