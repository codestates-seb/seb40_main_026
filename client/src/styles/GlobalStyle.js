import { createGlobalStyle } from 'styled-components';
import variables from './GlobalVariables';
import NanumGothic from './font/NanumGothic.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'NanumGothic';	
  src: local('NanumGothic'),    
  url(${NanumGothic} format('woff');
  font-weight: 300; 
  font-style: normal;}
* {
  font-family: 'NanumGothic';	
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;
  font-family: 'Nanum Gothic', sans-serif;
  .toast {
  top: 200px;
}
}
ol, ul {
	list-style: none;
}
a{
  text-decoration:none;
  color:#000;
}
input:focus {outline: none;}
:root {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  ${variables}
}
`;
export default GlobalStyle;
