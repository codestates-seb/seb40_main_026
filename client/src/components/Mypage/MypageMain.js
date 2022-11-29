import styled from 'styled-components';
import { MdEmojiPeople } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { tablet, mobile } from '../../styles/Responsive';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
//멤버 id 띄어야함
const MypageEdit = () => {
  const [UserInfo, SetUserInfo] = useState([]);
  const token = localStorage.getItem('accessToken');
  const decode = jwt_decode(token);
  const UserId = decode.memberId;

  useEffect(() => {
    axios({
      mathod: 'get',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/members/${UserId}`,
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      SetUserInfo(res.data);
      console.log(res.data);
    });
  }, []);
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

  return (
    <MypageContainer>
      <MypageMainwrap>
        <MypageLeft>
          <UserPhotoWrap>
            <img alt="userimg" src={UserDummydata.photourl}></img>
          </UserPhotoWrap>
          <NicknameWrap>
            <div>
              {' '}
              <span className="MypageTitle">닉네임</span>
            </div>

            <div>
              {' '}
              <span>
                {UserInfo.memberGrade}
                {UserInfo.nickname}
              </span>
            </div>
          </NicknameWrap>
        </MypageLeft>
        <MypageRight>
          <Userinfo>
            <CommDisplay>
              <span className="MypageTitle">총 게시물</span>
              <span>{UserDummydata.totalpost}개</span>
            </CommDisplay>
            <CommDisplay>
              <span className="MypageTitle">총 댓글</span>
              <span>{UserDummydata.totalcom}개</span>
            </CommDisplay>
            <CommDisplay>
              <span className="MypageTitle">계급</span>
              <span>{UserInfo.sticker}</span>
            </CommDisplay>
          </Userinfo>
          <UserIntro>
            <IntroWrap>
              <h4 className="MypageTitle">
                {' '}
                <MdEmojiPeople /> 자기소개
              </h4>
              <p>{UserDummydata.introduce}</p>
            </IntroWrap>
            <BtnWrap>
              <CommDisplay>
                <span>가입일 : {UserInfo.createdAt}</span>

                <span>최근 접속일 : {UserDummydata.recent}</span>
              </CommDisplay>
              <div>
                <button className="Canclebtn">
                  <Link to="/mypage/edit">수정하기</Link>
                </button>
                <button className="Outbtn">탈퇴하기</button>
              </div>
            </BtnWrap>
          </UserIntro>
        </MypageRight>
      </MypageMainwrap>
    </MypageContainer>
  );
};

const MypageContainer = styled.div`
  margin-bottom: 1rem;
  a {
    color: #fff;
  }
`;
const MypageMainwrap = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 1rem;
  box-shadow: grey 0px 0px 3px;
  padding: 1rem;
  display: flex;
  border-radius: 1rem;
  background-color: #fafafa;
  @media ${tablet} {
    font-size: 0.8rem;
    flex-direction: column;
  }
  @media ${mobile} {
    font-size: 0.8rem;
    flex-direction: column;
  }
`;
const NicknameWrap = styled.div`
  box-shadow: grey 0px 0px 3px;
  background-color: #fff;
  width: 150px;
  text-align: center;
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 0.5rem;
  .MypageTitle {
    color: #ffa800;
    font-size: 1.4rem;
  }
`;
const UserPhotoWrap = styled.div`
  img {
    width: 150px;
  }
`;
const MypageLeft = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: auto;
`;
const MypageRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: grey 0px 0px 3px;
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem;
  @media ${tablet} {
    width: 100%;
    margin: auto;
  }
  @media ${mobile} {
    width: 100%;
    flex-direction: column;
    padding: 0;
    margin: auto;
  }
`;
const Userinfo = styled.div`
  width: 250px;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 1rem;
  @media ${tablet} {
    margin-left: 1rem;
    box-shadow: grey 0px 0px 3px;
    font-size: 0.8rem;
    padding: 2rem;
    border-radius: 1rem;
  }
  @media ${mobile} {
    margin: auto;
    box-shadow: grey 0px 0px 3px;
    margin-top: 1rem;
    font-size: 0.8rem;
    padding: 1rem;
    border-radius: 1rem;
  }
`;
const CommDisplay = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  .MypageTitle {
    font-size: 1.4rem;
    color: #ffa800;
    margin-bottom: 0.5rem;
  }
  @media ${tablet} {
    .MypageTitle {
      font-size: 1rem;
      color: #ffa800;
    }
  }
  @media ${mobile} {
    .MypageTitle {
      font-size: 1rem;
      color: #ffa800;
    }
  }
`;
const UserIntro = styled.div`
  width: 100%;
  padding: 1rem;
  @media ${tablet} {
    width: 100%;
    margin-right: 0rem;
    padding: 1rem;
  }
  @media ${mobile} {
    width: 100%;
    margin-right: 0rem;
    padding: 2rem;
  }
`;
const IntroWrap = styled.div`
  box-shadow: grey 0px 0px 3px;
  border-radius: 1rem;
  height: 150px;
  padding: 1rem;
  > h4 {
    color: #ffa800;
  }
  @media ${tablet} {
    box-shadow: grey 0px 0px 3px;
    border-radius: 1rem;
    width: 100%;
    padding: 1rem;
  }
  @media ${mobile} {
    border-radius: 1rem;
    width: 80%;
    margin: auto;
    padding: 1rem;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  > div > button {
    padding: 1rem;
    margin-right: 0.5rem;
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
  @media ${tablet} {
    display: flex;
    font-size: 0.5rem;
    margin-top: 1rem;
    padding: 0.5rem;
    > div > button {
      padding: 0.5rem;
      font-size: 0.7rem;
    }
  }
  @media ${mobile} {
    width: 280px;
    margin: auto;
    font-size: 0.5rem;
    padding: 0.5rem;
    > div > button {
      padding: 0.8rem;
      font-size: 0.5rem;
    }
  }
`;
export default MypageEdit;
