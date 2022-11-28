import styled from 'styled-components';
import { tablet, mobile } from '../../styles/Responsive';
import { useState } from 'react';
import TitleHeader from '../Shared/TitleHeader';
import axios from 'axios';

const MypageEditContainer = () => {
  const [ImgSrc, SetImgSrc] = useState();
  const [Userintro, Setintro] = useState();
  const [Nickname, Setnickname] = useState();
  const ImgHandler = (event) => {
    SetSrc(event.target.files[0]);
  };
  const SetSrc = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e);
    return new Promise((resolve) => {
      reader.onload = () => {
        SetImgSrc(reader.result);
        resolve();
      };
    });
  };
  const onSaveClick = (e) => {
    e.preventDefault();
    axios({
      method: 'patch',
      url: `http://ec2-3-34-95-255.ap-northeast-2.compute.amazonaws.com:8080/members/{member-id}`,
      data: { Nickname, Userintro, ImgSrc },
      headers: {
        'ngrok-skip-browser-warning': 'skip',
      },
    })
      .then(function (response) {})
      .catch((err) => {
        console.log(err);
        alert('Failed to edit the text. Please try again');
      });
  };

  console.log(ImgSrc);
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
                  src={
                    ImgSrc
                      ? ImgSrc
                      : 'https://user-images.githubusercontent.com/107850055/202369291-3485bbf5-5880-405f-bb2f-996da606e7d5.png'
                  }
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
                <input></input>
              </div>
              <div>
                {' '}
                <span>자기소개 </span>
                <br />
                <textarea className="IntroInput"></textarea>
              </div>
            </EditRight>
          </EditformWrap>
          <Editbtn>
            <button onClick={onSaveClick}>회원정보 수정</button>
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
  .ImgInput {
    margin-top: 1rem;
  }
  .Imgwrap {
    width: 200px;
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
