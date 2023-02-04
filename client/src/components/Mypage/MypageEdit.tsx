import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';
import React, { useEffect, useState } from 'react';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../utils/api';

const MypageEditContainer = () => {
  const [UserInfo, SetUserInfo] = useState<any>([]);
  const [ImgSrc, SetImgSrc] = useState(
    'https://user-images.githubusercontent.com/107850055/202369291-3485bbf5-5880-405f-bb2f-996da606e7d5.png'
  ); //미리보기용
  const [Image, SetImage] = useState<any>(); //서버 전송용
  const [nickname, SetNickname] = useState('');
  const [introduce, SetIntro] = useState('');
  const token = localStorage.getItem('accessToken');
  const parse: any = token ? jwt_decode(token) : '';
  const UserId = parse.memberId;
  const navigate = useNavigate();
  const ImgHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    SetSrc(event.target.files);
    SetImage(event.target.files);
  };
  console.log(UserInfo);
  const SetSrc = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve: any) => {
      reader.onload = () => {
        SetImgSrc(reader.result as string);
        resolve();
      };
    });
  };

  const EditPatch = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    if (ImgSrc) {
      formData.append('image', Image === undefined ? ImgSrc : Image);
    }
    formData.append('introduce', introduce);
    formData.append('nickname', nickname);
    axios
      .patch(`${BASE_URL}members/${UserId}`, formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(function (response) {
        navigate('/mypage');
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}members/${UserId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        SetUserInfo(res.data);
        if (res.data.fileUrl) {
          SetImgSrc(res.data.fileUrl);
        }

        SetNickname(res.data.nickname);
        SetIntro(res.data.introduce);
      });
  }, []);
  console.log(ImgSrc, Image);
  return (
    <EditContainer>
      <TitleHeader title={'회원정보 수정'} />
      <EditWrap>
        <h3>회원정보 수정</h3>
        <EditForm>
          <EditformWrap>
            <EditLeft>
              <div>
                <img
                  className="Imgwrap"
                  alt="userimg"
                  src={ImgSrc ? ImgSrc : Image}
                ></img>
                <br></br>
                <input
                  type="file"
                  className="ImgInput"
                  onChange={ImgHandler}
                ></input>
              </div>
            </EditLeft>
            <EditRight>
              <div>
                {' '}
                <span>닉네임 </span>
                <br />
                <input
                  defaultValue={UserInfo.nickname}
                  onChange={(e) => SetNickname(e.target.value)}
                ></input>
              </div>
              <div>
                {' '}
                <span>자기소개 </span>
                <br />
                <textarea
                  className="IntroInput"
                  defaultValue={UserInfo.introduce}
                  onChange={(e) => SetIntro(e.target.value)}
                ></textarea>
              </div>
            </EditRight>
          </EditformWrap>
          <Editbtn>
            <button onClick={EditPatch}>수정하기</button>
          </Editbtn>
        </EditForm>
      </EditWrap>
    </EditContainer>
  );
};

const EditContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const EditWrap = styled.div`
  width: 50%;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: grey 0rem 0rem 0.2rem;
  @media ${mobile} {
    width: 50%;
  }
  @media ${tablet} {
    width: 50%;
    padding: 2rem;
  }
`;
const EditformWrap = styled.div`
  padding: 1rem;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${mobile} {
    width: 100%;
    margin: auto;
    flex-direction: column;
  }

  @media ${tablet} {
    flex-direction: column;
  }
`;
const EditForm = styled.form`
  display: flex;
  flex-direction: column;
`;
const EditLeft = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 5rem;
  .ImgInput {
    width: 200px;
    margin-top: 1rem;
  }
  .Imgwrap {
    width: 200px;
    border-radius: 50%;
  }

  @media ${mobile} {
    width: 80%;
    margin: auto;
    .Imgwrap {
      width: 80%;
    }
    .ImgInput {
      width: 90%;
      margin: auto;
      font-size: 0.5rem;
    }
  }
  @media ${tablet} {
    .Imgwrap {
      width: 80%;
    }
  }
`;
const EditRight = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  > div {
    padding: 0.5rem;
    padding: 1rem;
    > input {
      width: 100%;
      border-bottom: 1px solid;
    }
  }
  .IntroInput {
    box-shadow: grey 0rem 0rem 0.2rem;
    width: 250px;
    height: 150px;
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    resize: none;
  }

  @media ${mobile} {
    font-size: 0.5rem;
    margin: auto;
    .IntroInput {
      width: 150px;
      height: 100px;
    }
  }
  @media ${tablet} {
    margin-top: 1rem;
  }
`;

const Editbtn = styled.div`
  button {
    padding: 1rem;
    border-radius: 1rem;
    background-color: #ff62be;
    color: #fff;
    margin-top: 1rem;
  }
  @media ${mobile} {
    button {
      font-size: 0.5rem;
    }
  }
`;
export default MypageEditContainer;
