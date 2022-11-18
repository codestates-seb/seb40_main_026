import styled from 'styled-components';
import { MdEmojiPeople } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { tablet, mobile } from '../../styles/Responsive';

const MypageContainer = styled.div`
  margin-bottom: 1rem;

  .MypageMainwrap {
    width: 70%;
    margin: auto;
    margin-top: 1rem;
    box-shadow: grey 0px 0px 3px;
    padding: 1rem;
    display: flex;
    border-radius: 1rem;
    background-color: #fafafa;

    .CommDisplay {
      display: flex;
      flex-direction: column;
    }
    .MypageTitle {
      font-size: 1.4rem;
      color: #ffa800;
    }
    .MypageLeft {
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 1rem;
      margin: auto;

      .UserPhotoWrap {
        > img {
          width: 150px;
        }
      }

      .NicknameWrap {
        box-shadow: grey 0px 0px 3px;
        background-color: #fff;
        width: 150px;
        text-align: center;
        border-radius: 1rem;
        margin-top: 1rem;
        padding: 0.5rem;
      }
    }
    .MypageRight {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      box-shadow: grey 0px 0px 3px;
      background-color: #fff;
      border-radius: 1rem;
      .Userinfo {
        width: 250px;
        margin-left: 2rem;
        font-size: 1.2rem;
        padding: 1rem;
        border-radius: 1rem;
      }
      .UserIntro {
        width: 90%;
        margin-right: 2rem;
        padding: 1rem;
        .IntroWrap {
          box-shadow: grey 0px 0px 3px;
          border-radius: 1rem;
          width: 100%;
          height: 150px;
          margin-right: 3rem;
          padding: 1rem;
        }
        .btnWrap {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          > div > button {
            padding: 1rem;
            margin-right: 1rem;
            border-radius: 1rem;
            background-color: #fff;
            box-shadow: grey 0px 0px 3px;
            color: #fff;
          }
          .Canclebtn {
            background-color: #ff9fd7;
          }
          .Outbtn {
            background-color: #00d2ff;
          }
        }
      }
    }
  }
  @media ${tablet} {
    .MypageMainwrap {
      font-size: 0.8rem;
      flex-direction: column;
      .MypageTitle {
        font-size: 1rem;
        color: #ffa800;
      }
      .MypageRight {
        width: 100%;
        margin: auto;
        .Userinfo {
          margin-left: 1rem;
          box-shadow: grey 0px 0px 3px;

          font-size: 0.8rem;
          padding: 2rem;
          border-radius: 1rem;
        }
        .UserIntro {
          width: 100%;
          margin-right: 0rem;
          padding: 1rem;
          .btnWrap {
            display: flex;
            font-size: 0.5rem;
            margin-top: 1rem;
            padding: 0.5rem;
            > div > button {
              padding: 0.5rem;
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
  @media ${mobile} {
    .MypageMainwrap {
      font-size: 0.8rem;
      flex-direction: column;
      .MypageTitle {
        font-size: 1rem;
        color: #ffa800;
      }
      .MypageRight {
        width: 100%;
        flex-direction: column;
        margin: auto;
        .Userinfo {
          width: 90%;
          margin: auto;
          box-shadow: grey 0px 0px 3px;
          margin-top: 1rem;
          font-size: 0.8rem;
          padding: 2rem;
          border-radius: 1rem;
        }
        .UserIntro {
          width: 100%;
          margin-right: 0rem;
          padding: 1rem;
          .btnWrap {
            display: flex;
            font-size: 0.5rem;
            margin-top: 1rem;
            padding: 0.5rem;
            > div > button {
              padding: 0.2rem;
              font-size: 0.7rem;
            }
          }
        }
      }
    }
  }
`;

const MypageMain = () => {
  const UserDummydata = {
    id: 1,
    elementary: '상현초등학교',
    introduce: '저는 아구몬입니다 잘 부탁 드려요',
    totalpost: 20,
    totalcom: 10,
    level: '🥚',
    class: '질문왕',
    date: '22-11-14',
    recent: '1일전',
    nickname: '아구몬',
    photourl:
      'https://user-images.githubusercontent.com/107850055/202369291-3485bbf5-5880-405f-bb2f-996da606e7d5.png',
  };
  console.log(UserDummydata.id);
  return (
    <MypageContainer>
      <div className="MypageMainwrap">
        <div className="MypageLeft">
          <div className="UserPhotoWrap">
            <img alt="userimg" src={UserDummydata.photourl}></img>
          </div>
          <div className="NicknameWrap">
            <div>
              {' '}
              <span className="MypageTitle">닉네임</span>
            </div>

            <div>
              {' '}
              <span>
                {UserDummydata.level}
                {UserDummydata.nickname}
              </span>
            </div>
          </div>
        </div>
        <div className="MypageRight">
          <div className="Userinfo">
            <div className="CommDisplay">
              <span className="MypageTitle">학교</span>
              <span>
                {' '}
                <FaSchool />
                {UserDummydata.elementary}
              </span>
            </div>
            <div className="CommDisplay">
              <span className="MypageTitle">총 게시물</span>
              <span>{UserDummydata.totalpost}개</span>
            </div>
            <div className="CommDisplay">
              <span className="MypageTitle">총 댓글</span>
              <span>{UserDummydata.totalcom}개</span>
            </div>
            <div className="CommDisplay">
              <span className="MypageTitle">계급</span>
              <span>{UserDummydata.class}</span>
            </div>
          </div>
          <div className="UserIntro">
            <div className="IntroWrap">
              <h4 className="MypageTitle">
                {' '}
                <MdEmojiPeople /> 자기소개
              </h4>
              <p>{UserDummydata.introduce}</p>
            </div>
            <div className="btnWrap">
              <div className="CommDisplay">
                <span>가입일 : {UserDummydata.date}</span>

                <span>최근 접속일 : {UserDummydata.recent}</span>
              </div>
              <div>
                <button className="Canclebtn">수정하기</button>
                <button className="Outbtn">탈퇴하기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MypageContainer>
  );
};
export default MypageMain;
