import styled from 'styled-components';

const Searchwrap = styled.div`
  .Searchwrap {
    width: 1000px;
    display: flex;
    margin: auto;
    display: flex;

    > div {
      > input {
        box-shadow: grey 0px 0px 3px;
        margin-bottom: 10px;
        margin-right: 1rem;
        width: 800px;
        padding: 1rem;
        border-radius: 1rem;
      }
      > button {
        width: 150px;
        border-radius: 1rem;
        float: right;
        background-color: #ffc149;
        color: #fff;
        padding: 1rem;
      }
    }
  }
`;
const QuesSearch = () => {
  return (
    <Searchwrap>
      <div className="Searchwrap">
        <div>
          <input
            className="Searchinput"
            placeholder="질문을 입력해 주세요."
          ></input>
        </div>
        <div>
          {' '}
          <button>질문하기</button>
        </div>
      </div>
    </Searchwrap>
  );
};
export default QuesSearch;
