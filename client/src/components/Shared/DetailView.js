import styled from 'styled-components';
import LikeButton from './LikeButton';
const Detail = styled.div`
  width: 100%;
  margin-top: 1rem;

  .DetailViewWrap {
    width: 70%;
    margin: auto;
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: grey 0px 0px 3px;
    > div {
    }
    .DetailTitle {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    .UserWrap {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      margin-bottom: 3rem;
      color: grey;
      .Workbtn {
        float: right;

        > button {
          padding: 0.5rem;
          margin-left: 0.5rem;
          background-color: #fff;
          box-shadow: grey 0px 0px 3px;
          border-radius: 2rem;
          cursor: pointer;
        }
        > button:hover {
          color: grey;
        }
      }
    }
    .Article {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
  }
`;
const DetailView = () => {
  return (
    <>
      <Detail>
        <section className="DetailViewWrap">
          <div>
            <div>
              <h3 className="DetailTitle">제목</h3>
            </div>
            <div className="UserWrap">
              <div className="Userinfo">
                <span>닉네임 </span>
                <span>계급 </span>
                <span>레벨</span>
                <span>작성일자 </span>
              </div>
              <div className="Workbtn">
                <button> 수정하기 </button>
                <button> 삭제하기 </button>
                <button> 신고하기 </button>
              </div>
            </div>
            <div className="Article">
              <p>내용</p>
            </div>
            <div>
              <LikeButton />
            </div>
          </div>
        </section>
      </Detail>
    </>
  );
};
export default DetailView;
