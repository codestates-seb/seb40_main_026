import { createGlobalStyle } from 'styled-components';
import variables from './GlobalVariables';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;
}
ol, ul {
	list-style: none;
}
a{
  text-decoration:none;
  color:#000;
}
:root {
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 400;
  ${variables}
}
`;
export default GlobalStyle;
