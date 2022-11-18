import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
export default ScrollToTop;

//왜 S를 소문자로 바꾸면 오류가 나는걸까?
