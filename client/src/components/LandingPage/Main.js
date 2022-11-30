import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Slide from './Slide';
import Carousel from './Carousel';
import Education from './Education';
const MainPage = () => {
  return (
    <>
      <Slide />
      <Carousel />
      <Education />
    </>
  );
};

export default MainPage;
