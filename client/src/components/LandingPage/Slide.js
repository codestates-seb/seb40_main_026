import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Typing } from 'typing-effect-reactjs';

const Slide = () => {
  return (
    <>
      <SlideWrap>
        <div>
          {' '}
          <h2>
            {' '}
            <Typing
              text="Hello Coding World"
              typeSpeed={150}
              deleteSpeed={200}
              disableBlinkingOnEnd={false}
              blinkingSpeed={600}
              cursorThickness={0.01}
            ></Typing>
          </h2>
        </div>
        <div>
          {' '}
          <p>
            {' '}
            어린이용 코딩 교육 커뮤니티
            <br /> Coding{' '}
          </p>
        </div>
      </SlideWrap>
    </>
  );
};
const SlideWrap = styled.div`
  width: 100%;
  height: 650px;
  margin: auto;
  background-image: url('https://velog.velcdn.com/images/kjs0508/post/1b5b9dca-432a-457b-9d13-c8ad1eb917d1/image.gif');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  > div > h2 {
    margin-bottom: 1rem;
    color: #ffc149;
    font-size: 4rem;
    line-height: 4rem;
    animation: typewriter 4s steps(16, end), blink 1s step-end infinite;
    white-space: nowrap;
    @keyframes typing {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }

    @keyframes blinkTextCursor {
      from {
        border-right-color: rgba(255, 255, 255, 0.75);
      }
      to {
        border-right-color: transparent;
      }
    }
  }

  > div > p {
    margin-top: 1rem;
    font-size: 2rem;
    color: #fff;
    line-height: 2.5rem;
    opacity: 0;
    animation-name: fadeInUp;
    animation-duration: 3s;
    animation-delay: 3s;
    animation-fill-mode: forwards;

    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translate3d(0, 70%, 0);
      }
      100% {
        opacity: 1;
        transform: translateZ(0);
      }
    }
  }
`;
export default Slide;
