import { createGlobalStyle } from 'styled-components';
import variables from './GlobalVariables';
import NanumGothic from '../styles/NanumGothic.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "NanumGothic";
  src: local("NanumGothic"),
  url(${NanumGothic}) format('woff');
  font-weight: 400;
  font-style: normal;
}
* {
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;
  font-family: 'NanumGothic';
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

`;
export default GlobalStyle;
