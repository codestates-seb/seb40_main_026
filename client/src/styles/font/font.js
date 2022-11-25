import { createGlobalStyle } from 'styled-components'; //1
import NanumGothic from './NanumGothic.woff';
export default createGlobalStyle`		      
  @font-face {
    font-family: 'NanumGothic';	//폰트를 사용할 때 부르는 이름 지정
    src: local('NanumGothic'),    //지정한 이름
    url(${NanumGothic} format('woff');
    font-weight: 300; 		//폰트 기본 설정
    font-style: normal;}
`;
