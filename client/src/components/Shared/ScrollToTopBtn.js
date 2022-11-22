import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

const ScrollToTopBtn = () => {
  const [toggleBtn, setToggleBtn] = useState(true);
  const handleScroll = () => {
    const { scrollY } = window;
    scrollY > 300 ? setToggleBtn(true) : setToggleBtn(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Container>
      {toggleBtn ? (
        <ScrollBtn onClick={goToTop}>
          <BsFillArrowUpCircleFill size={30} />
        </ScrollBtn>
      ) : null}
    </Container>
  );
};

export default ScrollToTopBtn;

const Container = styled.div``;

const ScrollBtn = styled.button`
  background-color: transparent;
  position: fixed;
  bottom: 50px;
  left: 50%;
  z-index: 100;
  color: gray;
  cursor: pointer;
`;
