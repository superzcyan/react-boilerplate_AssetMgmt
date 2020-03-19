import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  #app {
    background-color: #dee2e6;
    min-height: 100%;
    min-width: 100%;
  }
  .required::after{
    content: "*";
    color: red;
    font-weight: bold;
}

.mb-2 > a {
  display: block;
  position: relative;
}
.mb-2 > a:after {
  content: "\f078"; /* fa-chevron-down */
  font-family: 'FontAwesome';
  position: absolute;
  right: 0;
}
.mb-2 > a[aria-expanded="true"]:after {
  content: "\f077"; /* fa-chevron-up */
}



`;

export default GlobalStyle;
