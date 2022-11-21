import styled from 'styled-components';
import { MdEmojiPeople } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { tablet, mobile } from '../../styles/Responsive';
import { useState } from 'react';
import TitleHeader from '../Shared/TitleHeader';

const EditContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .EditWrap {
    width: 50%;
    margin: auto;
    margin-top: 1rem;
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: grey 0rem 0rem 0.2rem;
    .EditForm {
      display: flex;
      flex-direction: column;
      .EditformWrap {
            padding:1rem;  
          margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
            .EditLeft {
     
            .ImgInput {
              text-align: center;
              margin-left: 3rem;
              margin-top:1rem;
            }
            .Imgwrap {
              width: 150px;
            }
          }
        }      
        .Editright {
          display: flex;
          flex-direction: column;
text-align:left;
          > div {
            padding: 0.5rem;
            padding:1rem;
            > input {
            width:15rem;
              border-bottom: 1px solid;
            }
            .IntroInput {
              box-shadow: grey 0rem 0rem 0.2rem;
              width: 250px;
              height: 150px;
              margin-top: 1rem;
              border-radius: 1rem;
            }
          }
        }
      }
      .Editbtn > button {
        padding: 1rem;
        border-radius: 1rem;
        background-color: #ff62be;
        color: #fff;
        margin-top: 1rem;
      }
    }
  }
`;

const MypageMain = () => {
  const [Imgurl, SetImgurl] = useState();
  const [ImgSrc, SetImgSrc] = useState();
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
  console.log(ImgSrc);
  return (
    <EditContainer>
      <TitleHeader title={'회원정보 수정'} />
      <div className="EditWrap">
        <h3>회원정보 수정</h3>
        <form className="EditForm">
          <div className="EditformWrap">
            <div className="EditLeft">
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
            </div>
            <div className="Editright">
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
            </div>
          </div>
          <div className="Editbtn">
            <button>회원정보 수정</button>
          </div>
        </form>
      </div>
    </EditContainer>
  );
};
export default MypageMain;
