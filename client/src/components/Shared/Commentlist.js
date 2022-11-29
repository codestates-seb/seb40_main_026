import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';
import { useState } from 'react';
const Commentlist = ({ CommentData, DeleteHandler, EditPatch }) => {
  const DummyComments = [
    {
      id: 1,

      body: '저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.저는 더미데이터 입니다.',
      date: '22-11-14',
      nickname: '아구몬',
    },
    {
      id: 2,

      body: '저는 두번째 더미데이터 입니다.',
      date: '22-11-15',
      nickname: '파닥몬',
    },
    {
      id: 3,

      body: '저는 세번째 더미데이터 입니다.',
      date: '22-11-16',
      nickname: '뿔몬',
    },
  ];
  const [EditClick, SetEditClick] = useState(false);
  const [TitleId, setTitleId] = useState(0);
  const EditHandler = (id) => {
    if (id === TitleId) {
      setTitleId(0);
      SetEditClick(false);
    } else {
      setTitleId(id);

      SetEditClick(true);
    }
  };

  console.log(EditClick);
  return (
    <CommentContainer>
      <ComInputWrap>
        <CommentUl>
          {/* CommentData.map */}
          {DummyComments.map((items) => {
            return (
              <>
                <CommentWrap key={items.id}>
                  <NickNameWrap>
                    <span>{items.nickname}</span>
                  </NickNameWrap>
                  <BodyWrap>
                    {items.id === TitleId ? (
                      <input defaultValue={items.body}></input>
                    ) : (
                      <p>{items.body}</p>
                    )}
                  </BodyWrap>
                  <DateWrap>
                    <div>
                      <span>{items.date}</span>
                    </div>
                    <BtnWrap>
                      <button
                        className="Canclebtn"
                        onClick={() => {
                          EditHandler(items.id);
                        }}
                      >
                        수정하기
                      </button>{' '}
                      <button className="Deletebtn">삭제하기</button>
                    </BtnWrap>
                  </DateWrap>
                </CommentWrap>
              </>
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
  width: 20%;
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
  text-align: center;

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
    width:100%;
    >button{
    font-size:0.5rem
    
  }
`;
export default Commentlist;
