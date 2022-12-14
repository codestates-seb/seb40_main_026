import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';
import { useState } from 'react';

const BoastCommentlist = ({
  CommentData,
  DeleteHandler,
  EditPatch,
  SetContent,
  currentCards,
  UserInfo,
}) => {
  const [EditClick, SetEditClick] = useState(false);
  const [titleId, SetTitleId] = useState(0);
  const EditHandler = (id) => {
    if (id === titleId) {
      SetTitleId(0);
      SetEditClick(false);
      EditPatch(id);
    } else {
      SetTitleId(id);
      SetEditClick(true);
    }
  };

  return (
    <CommentContainer>
      <ComInputWrap>
        <CommentUl className={currentCards.length > 0 ? null : 'none-display'}>
          {currentCards.map((item) => {
            return (
              <CommentWrap key={item.boastReplyId}>
                <NickNameWrap>
                  <span>{item.grade}</span>
                  <span>{item.nickName}</span>
                </NickNameWrap>
                <BodyWrap>
                  {item.boastReplyId === titleId ? (
                    <input
                      defaultValue={item.content}
                      onChange={(e) => SetContent(e.target.value)}
                    ></input>
                  ) : (
                    <p>{item.content}</p>
                  )}
                </BodyWrap>
                <DateWrap>
                  <div>
                    <span>{item.replyCreatedAt}</span>
                  </div>
                  {item.nickName === UserInfo.nickname ? (
                    <BtnWrap>
                      <button
                        className="Canclebtn"
                        onClick={() => {
                          EditHandler(item.boastReplyId);
                        }}
                      >
                        수정하기
                      </button>{' '}
                      <button
                        className="Deletebtn"
                        onClick={() => DeleteHandler(item.boastReplyId)}
                      >
                        삭제하기
                      </button>
                    </BtnWrap>
                  ) : null}
                </DateWrap>
              </CommentWrap>
            );
          })}
        </CommentUl>
      </ComInputWrap>
      <div> </div>
    </CommentContainer>
  );
};

const CommentContainer = styled.div`
  margin-bottom: 1rem;
`;
const ComInputWrap = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  .none-display {
    display: none;
  }
`;
const CommentUl = styled.ul`
  width: 100%;
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
  padding: 1rem;
`;
const CommentWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #cecece;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  > div > button {
    padding: 0.5rem;
    margin-right: 0.2rem;
    border-radius: 0.5rem;
  }
  @media ${mobile} {
    > div > span {
      font-size: 0.5rem;
    }
  }
`;
const NickNameWrap = styled.div`
  text-align: center;
`;
const BodyWrap = styled.div`
  width: 60%;
  > input {
    width: 100%;
    box-shadow: grey 0px 0px 3px;
    padding: 1rem;
  }
  @media ${tablet} {
    > span {
      font-size: 0.8rem;
    }
  }
  @media ${mobile} {
    > span {
      font-size: 0.8rem;
    }
  }
`;
const DateWrap = styled.div`
  width: 20%;
  text-align: right;

  @media ${tablet} {
    div > span {
      font-size: 0.8rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
  @media ${mobile} {
    > div > span {
      font-size: 0.8rem;
    }
    > p {
      font-size: 0.8rem;
    }
  }
`;
const BtnWrap = styled.div`
  button {
    padding: 0.3rem;
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    color: #fff;
    cursor: pointer;
  }
  .Canclebtn {
    background-color: #ff9fd7;
  }
  .Deletebtn {
    background-color: #00d2ff;
  }
  @media ${tablet} {
    width: 100%;
    > button {
      font-size: 0.5rem;
    }
  }
  @media ${mobile} {
    width: 100%;
    > button {
      font-size: 0.5rem;
    }
  }
`;
export default BoastCommentlist;
