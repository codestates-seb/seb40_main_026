import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Zoom from 'react-reveal/Zoom';
import Swing from 'react-reveal/Swing';
const Education = () => {
  return (
    <Zoom clear>
      <EduWrap>
        <div>
          <span>
            {' '}
            <Swing>
              <img
                alt="Bookimg"
                className="Bookimg"
                src="https://user-images.githubusercontent.com/107850055/204800639-259f96fc-7e47-4f70-88ce-91a457426fb8.png"
              ></img>{' '}
            </Swing>
          </span>
        </div>

        <div className="TitleWrap">
          <h1>
            코딩공부, <br /> 어떻게 해야 할지 막막하다면?
          </h1>
          <div className="BtnWrap">
            <a href="/study">
              <button className="RefkBtn">모여봐요</button>
            </a>
            <a href="/contents">
              {' '}
              <button className="LearnBtn">배울래요</button>
            </a>
          </div>
        </div>

        <div>
          <span>
            {' '}
            <Swing>
              <img
                alt="Quesimg"
                className="Quesimg"
                src="https://user-images.githubusercontent.com/107850055/205008457-406ce8ac-a513-4968-88a0-ebff96fde03e.png"
              ></img>{' '}
            </Swing>
          </span>

          <span>
            {' '}
            <Swing>
              <img
                alt="Lapimg"
                className="Lapimg"
                src="https://user-images.githubusercontent.com/107850055/204800630-9d0aece9-c58d-4b0e-9334-e7017b56c111.png"
              ></img>{' '}
            </Swing>
          </span>
        </div>
      </EduWrap>{' '}
    </Zoom>
  );
};

export default Education;
const EduWrap = styled.div`
  width: 80%;
  height: 600px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 4rem;
  border-radius: 1rem;
  box-shadow: grey 0rem 0rem 0.2rem;
  .BtnWrap {
    a > button {
      width: 200px;
      margin-top: 3rem;
      padding: 1rem;
      margin-right: 1rem;
      text-align: center;
      color: #fff;
      border-radius: 2rem;
      transition: all 0.5s;
      font-size: 1.2rem;
      :hover {
        transform: scale(1.1);
      }
    }
    .RefkBtn {
      background-color: #ff9fd7;
    }
    .LearnBtn {
      background-color: #00d2ff;
    }
  }
  .TitleWrap {
    width: 100%;
    padding: 10rem;
  }
  > div {
    text-align: center;
    > span {
      .Lapimg {
        width: 220px;
        position: absolute;
        top: 60%;
        right: 10%;
      }
      .Bookimg {
        width: 260px;
        position: absolute;
        top: 45%;
        left: 5%;
      }
      .Quesimg {
        width: 290px;
        position: absolute;
        top: 12%;
        right: 8%;
      }
    }
    > h1 {
      font-size: 3.5rem;
      line-height: 4rem;
      color: #ffc149;
      margin-top: 4rem;
    }
  }
`;
