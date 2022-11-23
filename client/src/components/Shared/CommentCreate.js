import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';

const CreateWrap = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .ComInputWrap {
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
    }
    @media ${tablet} {
      .CommentBtn {
        width: 70px;
      }
    }
    @media ${mobile} {
      .ComInputWrap {
        padding: 0.2rem;
      }
      .CommentBtn {
        width: 60px;
      }
    }
  }
`;
const CommentCreate = () => {
  return (
    <CreateWrap>
      <div className="ComInputWrap">
        <input
          className="CommentInput"
          placeholder="댓글을 입력해주세요"
        ></input>{' '}
        <button className="CommentBtn">입력</button>{' '}
      </div>
      <div> </div>
    </CreateWrap>
  );
};
export default CommentCreate;
