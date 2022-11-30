import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Education = () => {
  return (
    <EduWrap>
      <div>
        <span>
          <img
            alt="Bookimg"
            className="Bookimg"
            src="https://user-images.githubusercontent.com/107850055/204800639-259f96fc-7e47-4f70-88ce-91a457426fb8.png"
          ></img>
        </span>
      </div>
      <div className="TitleWrap">
        <h1>
          코딩교육, <br /> 어떻게 해야 할 지 막막하다면?
        </h1>
        <div className="BtnWrap">
          <button className="BackBtn">래퍼런스</button>
          <button className="CreateBtn">배울래요</button>
        </div>
      </div>
      <div>
        <span>
          <img
            alt="Quesimg"
            className="Quesimg"
            src="https://user-images.githubusercontent.com/107850055/204800640-c4029ace-9c94-49bd-a8ca-2b0c8bc55f40.png"
          ></img>
        </span>
        <span>
          <img
            alt="Lapimg"
            className="Lapimg"
            src="https://user-images.githubusercontent.com/107850055/204800630-9d0aece9-c58d-4b0e-9334-e7017b56c111.png"
          ></img>
        </span>
      </div>
    </EduWrap>
  );
};

export default Education;
const EduWrap = styled.div`
  width: 80%;
  height: 500px;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
  .BtnWrap {
    > button {
      width: 200px;
      margin-top: 1rem;
      padding: 1rem;
      margin-right: 1rem;
      text-align: center;
      color: #fff;
      border-radius: 2rem;
    }
    .BackBtn {
      background-color: #ff9fd7;
    }
    .CreateBtn {
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
        width: 200px;
        position: absolute;
        top: 55%;
        right: 10%;
      }
      .Bookimg {
        width: 300px;
        position: absolute;
        top: 35%;
      }
      .Quesimg {
        width: 350px;
        position: absolute;
        top: 5%;
        right: 5%;
      }
    }
    > h1 {
      font-size: 3rem;
      line-height: 4rem;
      color: #ffc149;
    }
  }
`;
