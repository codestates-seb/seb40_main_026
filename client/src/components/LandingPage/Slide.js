import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Slide = () => {
  return (
    <>
      <SlideWrap>
        <div>
          {' '}
          <h2>
            {' '}
            Hello
            <br /> Coding World{' '}
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
  height: 600px;
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
  > div > h2 {
    margin-bottom: 1rem;
    color: #ffc149;
    font-size: 3rem;
    line-height: 4rem;
  }
  > div > p {
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.5rem;
  }
`;
export default Slide;
