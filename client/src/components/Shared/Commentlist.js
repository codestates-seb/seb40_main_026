import styled from 'styled-components';
const CommentContainer = styled.div`
  margin-bottom: 1rem;
  .ComInputWrap {
    width: 70%;
    margin: auto;

    display: flex;
    justify-content: space-between;
    .CommentUl {
      width: 100%;
      box-shadow: grey 0px 0px 3px;
      border-radius: 1rem;
      padding: 1rem;
    }
    .CommentWrap {
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
      .nicknameWrap {
        width: 20%;
        text-align: center;
      }
      .bodyWrap {
        width: 60%;
      }
      .dateWrap {
        width: 20%;
        text-align: center;
        > div > button {
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
      }
    }
  }
`;
const Commentlist = () => {
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
  return (
    <CommentContainer>
      <div className="ComInputWrap">
        <ul className="CommentUl">
          {DummyComments.map((items) => {
            return (
              <>
                <li key={items.id} className="CommentWrap">
                  {' '}
                  <div className="nicknameWrap">
                    <span>{items.nickname}</span>
                  </div>
                  <div className="bodyWrap">
                    {' '}
                    <p>{items.body}</p>
                  </div>
                  <div className="dateWrap">
                    {' '}
                    <div>
                      {' '}
                      <span>{items.date}</span>
                    </div>
                    <div>
                      {' '}
                      <button className="Canclebtn">수정하기</button>{' '}
                      <button className="Deletebtn">삭제하기</button>
                    </div>{' '}
                  </div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
      <div> </div>
    </CommentContainer>
  );
};
export default Commentlist;
