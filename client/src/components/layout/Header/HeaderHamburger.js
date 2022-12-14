import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import styled from 'styled-components';
import { mobile, tablet } from '../../../styles/Responsive';
import HeaderHamburgerModal from './HeaderHamburgerModal';

const HeaderHamburger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HamburgerButton
        onClick={() => {
          setOpen(!open);
        }}
      >
        <AiOutlineMenu size={25} />
      </HamburgerButton>
      {open ? <HeaderHamburgerModal setOpen={setOpen} /> : null}
    </>
  );
};

export default HeaderHamburger;

const HamburgerButton = styled.button`
  display: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  @media ${tablet} {
    display: block;
  }
  @media ${mobile} {
    display: block;
  }
`;
