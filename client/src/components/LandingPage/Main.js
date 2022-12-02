import { mobile } from '../../styles/Responsive';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Slide from './Slide';
import Service from './Service';
import Education from './Education';
const MainPage = () => {
  return (
    <>
      <Slide />
      <Service />
      <Education />
    </>
  );
};

export default MainPage;
