import { createGlobalStyle } from 'styled-components';
import variables from './GlobalVariables';
const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  border:0;
  margin:0;
  padding:0;
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
  font-family: 'Nanum Gothic', sans-serif;
  font-weight: 400;
  ${variables}
}
`;
export default GlobalStyle;
