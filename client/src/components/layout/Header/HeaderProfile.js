import { useState } from 'react';
import styled from 'styled-components';
import profileImg from '../../../assets/images/profile.png';
import { mobile, tablet } from '../../../styles/Responsive';
import HeaderProfileModal from './HeaderProfileModal';

const HeaderProfile = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img alt="profileImg" src={profileImg} />
      </button>
      {open ? <HeaderProfileModal setOpen={setOpen} /> : null}
    </Container>
  );
};

export default HeaderProfile;

const Container = styled.div`
  width: 250px;
  padding: 10px;
  height: 100%;
  > button {
    background-color: white;
    cursor: pointer;
  }
  @media ${tablet} {
    display: none;
  }
  @media ${mobile} {
    display: none;
  }

  img {
    width: 60px;
    cursor: pointer;
  }
`;
