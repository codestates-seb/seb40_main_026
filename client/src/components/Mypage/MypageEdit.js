import styled from 'styled-components';
import { MdEmojiPeople } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';
import { tablet, mobile } from '../../styles/Responsive';

const EditContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .EditWrap {
    width: 50%;
    margin: auto;
    padding: 1rem;
    text-align: center;
    border-radius: 1rem;
    box-shadow: grey 0px 0px 3px;
    .EditForm {
      display: flex;
      flex-direction: column;
      .EditformWrap {
        width: 80%;

        margin: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .EditLeft {
          margin-left: 1rem;

          .Imgwrap {
            width: 150px;
          }
        }

        .Editright {
          display: flex;
          flex-direction: column;

          > div {
            padding: 0.5rem;
            > input {
              margin-left: 1rem;
              border-bottom: 1px solid;
            }
            .IntroInput {
              box-shadow: grey 0px 0px 3px;
              width: 200px;
              height: 100px;
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
  return (
    <EditContainer>
      <div className="EditWrap">
        <h3>회원 정보 수정</h3>
        <form className="EditForm">
          <div className="EditformWrap">
            <div className="EditLeft">
              <div>
                <img
                  className="Imgwrap"
                  alt="userimg"
                  src="https://user-images.githubusercontent.com/107850055/202369291-3485bbf5-5880-405f-bb2f-996da606e7d5.png"
                ></img>
                <br></br>
                <span>이미지</span>
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
                <input className="IntroInput"></input>
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
