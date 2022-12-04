import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';

const CommentCreate = ({ Setcontent, postHandler }) => {
  return (
    <CreateWrap>
      <ComInputWrap>
        <input
          className="CommentInput"
          defaultValue={Setcontent}
          onChange={(e) => Setcontent(e.target.value)}
        ></input>{' '}
        <button className="CommentBtn" onClick={() => postHandler(8)}>
          입력
        </button>{' '}
      </ComInputWrap>
      <div> </div>
    </CreateWrap>
  );
};

const CreateWrap = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .ComInputWrap {
    @media ${tablet} {
      .button {
        width: 70px;
      }
    }
    @media ${mobile} {
      padding: 0.2rem;
      .CommentBtn {
        width: 60px;
      }
    }
  }
`;
const ComInputWrap = styled.div`
  width: 70%;
  margin: auto;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: grey 0px 0px 3px;
  display: flex;
  justify-content: space-between;
  > input {
    width: 90%;
  }
  > button {
    width: 80px;
    padding: 0.5rem;
    border-radius: 1rem;
    background-color: #00d2ff;
    color: #fff;
    cursor: pointer;
  }
`;
export default CommentCreate;
